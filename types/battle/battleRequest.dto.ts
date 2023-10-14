import { EBattleType } from "./battletype.enum";

export type MatchRequestDto = {
  petId: string;
  battleType: EBattleType;
};
