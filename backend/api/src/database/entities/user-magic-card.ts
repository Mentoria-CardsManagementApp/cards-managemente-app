import { Insertable, Selectable, Updateable } from 'kysely';

enum ConservationState {
  MINT,
  NEAR_MINT,
  SLIGHTLY_PLAYED,
  MODERATED_PLAYED,
  HEAVILY_PLAYED,
  DAMAGED,
}

export interface UserMagicCardTable {
  user_id: string;
  magic_card_id: string;
  quantity: number;
  conservation_state: ConservationState;
}

export type UserMagicCard = Selectable<UserMagicCardTable>;
export type NewUserMagicCard = Insertable<UserMagicCardTable>;
export type UserMagicCardUpdate = Updateable<UserMagicCardTable>;
