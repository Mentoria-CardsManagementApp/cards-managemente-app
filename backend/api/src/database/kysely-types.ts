import { UserTable } from './entities/user';
import { UserAuthProviderTable } from './entities/user-auth-provider';
import { UserConfigsTable } from './entities/user-configs';
import { UserMagicCardTable } from './entities/user-magic-card';

export interface DB {
  user: UserTable;
  userConfigs: UserConfigsTable;
  userMagicCard: UserMagicCardTable;
  usersAuthProvider: UserAuthProviderTable;
}
