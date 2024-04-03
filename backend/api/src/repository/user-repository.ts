import { UpdateResult } from 'kysely';
import { NewUser, User, UserUpdate } from '../database/entities/user';
import { db } from '../database/postgres-dialect';

export async function findUserById(id: string): Promise<User | undefined> {
  return await db
    .selectFrom('user')
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst();
}

export async function createUser(user: NewUser): Promise<User> {
  return await db
    .insertInto('user')
    .values(user)
    .returningAll()
    .executeTakeFirstOrThrow();
}

export async function updateUser(
  id: string,
  updateWith: UserUpdate
): Promise<UpdateResult> {
  return await db
    .updateTable('user')
    .set(updateWith)
    .where('id', '=', id)
    .executeTakeFirstOrThrow();
}

export async function deleteUser(id: string): Promise<User> {
  return await db
    .deleteFrom('user')
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirstOrThrow();
}
