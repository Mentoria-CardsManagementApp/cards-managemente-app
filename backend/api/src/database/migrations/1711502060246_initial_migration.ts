import { Kysely, sql } from 'kysely';
import { DB } from '../kysely-types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('user')
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

  await db.schema
    .createTable('user_magic_card')
    .addColumn('user_id', 'uuid', (col) => col.references('user.id').notNull())
    .addColumn('magic_card_id', 'uuid', (col) => col.primaryKey().notNull())
    .addColumn('quatity', 'integer', (col) => col.notNull())
    .addColumn('conservation_state', 'varchar', (col) => col.notNull())
    .execute();

  await db.schema
    .createTable('user_configs')
    .addColumn('magic_collection_privacy', 'varchar', (col) => col.notNull())
    .addColumn('user_id', 'uuid', (col) => col.references('user.id').notNull())
    .execute();

  await db.schema
    .createTable('user_auth_provider')
    .addColumn('user_id', 'uuid', (col) => col.references('user.id').notNull())
    .addColumn('auth_provider', 'varchar', (col) => col.primaryKey().notNull())
    .execute();
}

export async function down(db: Kysely<DB>): Promise<void> {
  await db.schema.dropTable('user_magic_card').execute();
  await db.schema.dropTable('user_configs').execute();
  await db.schema.dropTable('user_auth_provider').execute();
  await db.schema.dropTable('user').execute();
}
