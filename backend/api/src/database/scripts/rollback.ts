import * as path from 'node:path';
import { promises as fs } from 'node:fs';
import { Migrator, FileMigrationProvider } from 'kysely';
import { db } from '../postgres-dialect';

export async function migrateToLatest() {
  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: path.join(__dirname, '../migrations'),
    }),
  });

  const { error, results } = await migrator.migrateDown();

  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.log(`rollback "${it.migrationName}" was executed successfully`);
    } else if (it.status === 'Error') {
      console.error(`failed to execute rollback "${it.migrationName}"`);
    }
  });

  if (error) {
    console.error('failed to rollback');
    console.error(error);
    process.exit(1);
  }

  await db.destroy();
}

migrateToLatest();