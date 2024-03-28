import { NewUser, User, UserUpdate } from '../database/entities/user';
import { db } from '../database/postgres-dialect';

export async function findUserById(id: string): Promise<User> {
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
    .executeTakeFirst();
}

export async function updateUser(id: string, updateWith: UserUpdate) {
  return await db
    .updateTable('user')
    .set(updateWith)
    .where('id', '=', id)
    .execute();
}

export async function deleteUser(id: string): Promise<User> {
  return await db
    .deleteFrom('user')
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirst();
}
