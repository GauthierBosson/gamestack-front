import {Kysely, PostgresDialect} from 'kysely';
import type {DB} from 'kysely-codegen';
import pkg from 'pg';

const {Pool} = pkg;

if (!process.env) throw new Error('process.env is not set');

const dialect = new PostgresDialect({
  pool: new Pool({
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
    max: 10,
  }),
});

export const db = new Kysely<DB>({
  dialect,
});
