import { Generated, Insertable, Selectable, Updateable } from 'kysely';

export interface UserTable {
  id: Generated<string>;
  googleId?: string | null;
  spotifyId?: string | null;
  facebookId?: string | null;
  email: string;
  username: string;
  birthDate: Date | null;
  city: string | null;
  region: string | null;
  country: string | null;
  createdAt: Generated<Date>;
  updatedAt: Generated<Date>;
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;
