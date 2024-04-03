import {
  Generated,
  Insertable,
  Nullable,
  Selectable,
  Updateable,
} from 'kysely';

export interface UserTable {
  id: string;
  googleId: string;
  spotifyId: string;
  facebookId: string;
  email: string;
  username: string;
  birthDate: Nullable<Date>;
  city: Nullable<string>;
  region: Nullable<string>;
  country: Nullable<string>;
  createdAt: Generated<Date>;
  updatedAt: Generated<Date>;
}

export type User = Selectable<UserTable> | undefined;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;
