import { type } from "os";
import { EBattleStatus } from "./battleStatus.enum";
import { EBattleType } from "./battletype.enum";

export type Battle = {
  id: string;
  uuid: string;
  type: EBattleType;
  status: EBattleStatus;
  endedRounds: BattleRound[];
  currentRound: BattleRound;
  timerSeconds: number;
  blueTeam: any;
  redTeam: any;
  winner?: "blue" | "red";
  created_at: Date;
  updated_at: Date;
};
export type BattleRound = {
  blueAction: TRoundPet;
  redAction: TRoundPet;
};
