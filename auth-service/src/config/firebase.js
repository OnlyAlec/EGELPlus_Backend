import { createRequire } from "module";

import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const require = createRequire(import.meta.url);
const serviceAccount = require("../../firebase.json");

const firebaseConfig = {
  credential: cert(serviceAccount),
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
