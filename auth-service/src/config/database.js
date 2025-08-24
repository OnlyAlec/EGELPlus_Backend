import pg from "pg";
const { Pool } = pg;

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
};

export const dbPool = new Pool(config);

dbPool.on("error", (err) => {
  console.error("[DB] Unexpected error on idle client", err);
});
