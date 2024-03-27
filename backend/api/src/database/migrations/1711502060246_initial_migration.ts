import { Kysely, sql } from 'kysely';
import { DB } from '../../utils/kysely-types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('users')
    .addColumn('id', 'uuid', (col) => col.primaryKey())
    .addColumn('email', 'varchar', (col) => col.notNull())
    .addColumn('username', 'varchar', (col) => col.notNull())
    .addColumn('birth_date', 'date')
    .addColumn('city', 'varchar')
    .addColumn('region', 'varchar')
    .addColumn('country', 'varchar')
    .addColumn('created_at', 'timestamptz', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamptz', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .execute();
}

export async function down(db: Kysely<DB>): Promise<void> {
  await db.schema.dropTable('users').execute();
}
