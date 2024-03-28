import { Insertable, Selectable, Updateable } from 'kysely';

enum Privacy {
  PUBLIC,
  PRIVATE,
}

export interface UserConfigsTable {
  user_id: string;
  magic_collection_privacy: Privacy;
}

export type UserConfigs = Selectable<UserConfigsTable>;
export type NewUserConfigs = Insertable<UserConfigsTable>;
export type UserConfigsUpdate = Updateable<UserConfigsTable>;
