import { UserRepositoryInterface } from './UserRepositoryInterface';
import { NewUser, User, UserUpdate } from '../database/entities/user';
import { db } from '../database/postgres-dialect';
import { UpdateResult } from 'kysely';

export class UserRepository implements UserRepositoryInterface {
  async findUserById(id: string): Promise<User | undefined> {
    try {
      const user = await db
        .selectFrom('user')
        .where('id', '=', id)
        .selectAll()
        .executeTakeFirst();

      return user;
    } catch (error: any) {
      throw new error();
    }
  }

  async findUserByGoogleId(googleId: string): Promise<User | undefined> {
    try {
      const user = await db
        .selectFrom('user')
        .where('googleId', '=', googleId)
        .selectAll()
        .executeTakeFirst();

      return user;
    } catch (error: any) {
      throw new error();
    }
  }

  async findUserByFacebookId(facebookId: string): Promise<User | undefined> {
    try {
      const user = await db
        .selectFrom('user')
        .where('facebookId', '=', facebookId)
        .selectAll()
        .executeTakeFirst();

      return user;
    } catch (error: any) {
      throw new error();
    }
  }

  async findUserBySpotifyId(spotifyId: string): Promise<User | undefined> {
    try {
      const user = await db
        .selectFrom('user')
        .where('facebookId', '=', spotifyId)
        .selectAll()
        .executeTakeFirst();

      return user;
    } catch (error: any) {
      throw new error();
    }
  }

  async createUser(user: NewUser): Promise<User> {
    try {
      const createdUser = await db
        .insertInto('user')
        .values(user)
        .returningAll()
        .executeTakeFirstOrThrow();

      return createdUser as User;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async updateUser(id: string, updateWith: UserUpdate): Promise<UpdateResult> {
    try {
      const user = await db
        .updateTable('user')
        .set(updateWith)
        .where('id', '=', id)
        .executeTakeFirstOrThrow();

      return user;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async deleteUser(id: string): Promise<User> {
    try {
      const deletedUser = await db
        .deleteFrom('user')
        .where('id', '=', id)
        .returningAll()
        .executeTakeFirstOrThrow();

      return deletedUser as User;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
