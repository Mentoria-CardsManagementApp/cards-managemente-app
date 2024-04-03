import { UpdateResult } from 'kysely';
import { NewUser, User, UserUpdate } from '../database/entities/user';

export interface UserRepositoryInterface {
  findUserById(userId: string): Promise<User>;
  findUserByGoogleId(userId: string): Promise<User>;
  findUserByFacebookId(userId: string): Promise<User>;
  findUserBySpotifyId(userId: string): Promise<User>;
  createUser(user: NewUser): Promise<User>;
  updateUser(userId: string, newUser: UserUpdate): Promise<UpdateResult>;
  deleteUser(userId: string): Promise<User>;
}
