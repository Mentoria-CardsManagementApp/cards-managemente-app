import { DB } from './kysely-types';
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'cards',
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    port: 5432,
    max: 100,
  }),
});

export const db = new Kysely<DB>({
  dialect,
});
