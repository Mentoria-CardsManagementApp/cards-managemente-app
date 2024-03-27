import { db } from '../database/postgres-dialect';
import { User, NewUser, UserUpdate } from '../utils/kysely-types';

export async function findUserById(id: string): Promise<User> {
  return await db
    .selectFrom('users')
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst();
}

export async function createUser(user: NewUser): Promise<User> {
  return await db
    .insertInto('users')
    .values(user)
    .returningAll()
    .executeTakeFirst();
}

export async function updateUser(id: string, updateWith: UserUpdate) {
  return await db
    .updateTable('users')
    .set(updateWith)
    .where('id', '=', id)
    .execute();
}

export async function deleteUser(id: string): Promise<User> {
  return await db
    .deleteFrom('users')
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirst();
}
