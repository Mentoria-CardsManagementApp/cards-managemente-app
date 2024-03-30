import {
  Generated,
  Insertable,
  Nullable,
  Selectable,
  Updateable,
} from 'kysely';

export interface UserTable {
  id: string;
  email: string;
  username: string;
  birthDate: Nullable<Date>;
  city: Nullable<string>;
  region: Nullable<string>;
  country: Nullable<string>;
  createdAt: Generated<Date>;
  updatedAt: Generated<Date>;
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;
