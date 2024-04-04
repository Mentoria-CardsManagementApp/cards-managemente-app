import { UpdateResult } from 'kysely';
import { NewUser, User, UserUpdate } from '../database/entities/user';

export interface UserRepositoryInterface {
  findUserById(userId: string): Promise<User | undefined>;
  findUserByGoogleId(userId: string): Promise<User | undefined>;
  findUserByFacebookId(userId: string): Promise<User | undefined>;
  findUserBySpotifyId(userId: string): Promise<User | undefined>;
  createUser(user: NewUser): Promise<User>;
  updateUser(userId: string, newUser: UserUpdate): Promise<UpdateResult>;
  deleteUser(userId: string): Promise<User>;
}
