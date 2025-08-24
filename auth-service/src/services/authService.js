import { dbPool } from "../config/database.js";
import { firebaseAuth } from "../config/firebase.js";
import { validateUserCreate, User } from "../models/User.js";
import {
  ConflictError,
  DatabaseError,
  mapFirebaseError,
  ensureAppError,
} from "../utils/errors.js";
import { logger } from "../utils/logger.js";

async function emailExists(email) {
  const client = await dbPool.connect();
  try {
    const q = {
      text: 'SELECT 1 FROM "auth"."users" WHERE email = $1 LIMIT 1',
      values: [email],
    };
    const res = await client.query(q);
    logger.debug("Checked email existence", {
      email,
      exists: res.rowCount > 0,
    });
    return res.rowCount > 0;
  } catch (e) {
    throw new DatabaseError("Failed checking email", e);
  } finally {
    client.release();
  }
}

async function saveUserAuthDB(userEntity) {
  const client = await dbPool.connect();
  try {
    await client.query("BEGIN");
    const q = {
      text: 'INSERT INTO "auth"."users"("uidFirebase", email, name, id_role) VALUES ($1,$2,$3,$4) RETURNING id',
      values: [
        userEntity.uidFirebase,
        userEntity.email,
        userEntity.name,
        userEntity.role,
      ],
    };
    const res = await client.query(q);
    logger.info("Inserted user auth record", { email: userEntity.email });
    await client.query("COMMIT");
    return res.rows[0]?.id;
  } catch (e) {
    await client.query("ROLLBACK");
    throw new DatabaseError("Failed saving user", e);
  } finally {
    client.release();
  }
}

export async function registerUser(rawData) {
  let userCredential;

  try {
    const rawUser = validateUserCreate(rawData);

    if (await emailExists(rawUser.email)) {
      throw new ConflictError("Email already registered");
    }

    try {
      userCredential = await firebaseAuth.createUser({
        email: rawUser.email,
        emailVerified: false,
        password: rawData.password,
        displayName: rawData.name,
        disabled: false,
      });
      logger.info("Firebase user created", { uid: userCredential?.uid });
    } catch (fbErr) {
      logger.warn("Firebase creation failed", { code: fbErr?.code });
      throw mapFirebaseError(fbErr);
    }

    const userEntity = new User({
      uidFirebase: userCredential?.uid,
      email: rawUser.email,
      name: rawUser.name,
      role: rawUser.role,
    });

    const id = await saveUserAuthDB(userEntity);
    logger.info("User registration flow complete", {
      uid: userEntity.uidFirebase,
      id,
    });
    return { id, email: rawUser.email };
  } catch (err) {
    logger.error("Registration failed", err);
    try {
      if (userCredential?.uid) {
        await firebaseAuth.deleteUser(userCredential.uid);
        logger.info("Firebase user rollback", {
          uid: userCredential.uid,
        });
      }
    } catch (e) {
      logger.warn("Firebase delete failed", { code: e?.code });
      throw ensureAppError(mapFirebaseError(e));
    }
    throw ensureAppError(err);
  }
}
