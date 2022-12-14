import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, DB_SCHEMA, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN, HOST } =
  process.env;

console.log('ENV:', {
  NODE_ENV,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_SCHEMA,
  SECRET_KEY,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
});
