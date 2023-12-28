import { Pool } from 'pg';

export const pool = new Pool({
  user: 'PG_USERNAME',
  host: 'localhost',
  database: 'postgres',
  password: 'PG_PASSWORD',
  port: 15432,
});
