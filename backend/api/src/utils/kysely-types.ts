import {
  Generated,
  Insertable,
  Nullable,
  Selectable,
  Updateable,
} from 'kysely';

export interface DB {
  users: UsersTable;
  // userConfigs: UserConfigsTable;
  // userMagicCard: UserMagicCardTable;
  // usersAuthProvider: UserAuthProviderTable;
}

export interface UsersTable {
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

export type User = Selectable<UsersTable>;
export type NewUser = Insertable<UsersTable>;
export type UserUpdate = Updateable<UsersTable>;
