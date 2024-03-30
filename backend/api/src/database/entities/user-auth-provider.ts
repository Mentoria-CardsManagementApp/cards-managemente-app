import { Insertable, Selectable, Updateable } from 'kysely';

enum AuthProvider {
  FACEBOOK,
  GOOGLE,
  SPOTIFY,
}

export interface UserAuthProviderTable {
  user_id: string;
  auth_provider: AuthProvider;
}

export type UserAuthProvider = Selectable<UserAuthProviderTable>;
export type NewUserAuthProvider = Insertable<UserAuthProviderTable>;
export type UserAuthProviderUpdate = Updateable<UserAuthProviderTable>;
