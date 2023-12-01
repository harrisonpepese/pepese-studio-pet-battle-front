import { BattlePetInfo } from "@/components/molecule/BattlePetInfo";
import { BattleContext } from "@/context/BattleContext";
import { EBattleAction } from "@/types/battle/battleAction.enum";
import { EBattleStatus } from "@/types/battle/battleStatus.enum";
import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";

export function Match() {
  const { reset, battle, sendRoundAction } = useContext(BattleContext);
  const { blueTeam, redTeam } = battle;
  console.log(blueTeam.pet);
  return (
    <Box display="flex" flexDirection="column">
      <Typography>Battle uuid: {battle.uuid}</Typography>
      <Typography>Battle status: {battle.status}</Typography>
      <Typography>Battle type: {battle.battleType}</Typography>
      <Typography>Battle winner: {battle.winner}</Typography>
      <Typography>timer: {battle.timerSeconds}</Typography>

      <Button variant="contained" onClick={() => reset()}>
        reset
      </Button>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <BattlePetInfo
          petName={blueTeam.pet.name}
          life={blueTeam.pet.status.currentHealth}
          stamina={blueTeam.pet.status.currentStamina}
          maxstamina={blueTeam.pet.status.stamina}
          maxLife={blueTeam.pet.status.health}
          xp={blueTeam.pet.experience}
        />
        <Typography variant="h3">X</Typography>
        <BattlePetInfo
          petName={redTeam.pet.name}
          life={redTeam.pet.status.currentHealth}
          stamina={redTeam.pet.status.currentStamina}
          maxstamina={redTeam.pet.status.stamina}
          maxLife={redTeam.pet.status.health}
          xp={redTeam.pet.experience}
        />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <Button
          variant="contained"
          onClick={() => sendRoundAction(EBattleAction.attack)}
          disabled={battle.status === EBattleStatus.finished}
        >
          Basic attack
        </Button>
        <Button
          variant="contained"
          onClick={() => sendRoundAction(EBattleAction.defense)}
          disabled={battle.status === EBattleStatus.finished}
        >
          Defensive Position
        </Button>
        <Button
          variant="contained"
          onClick={() => sendRoundAction(EBattleAction.dodge)}
          disabled={battle.status === EBattleStatus.finished}
        >
          Try dodge
        </Button>
        <Button
          variant="contained"
          onClick={() => sendRoundAction(EBattleAction.rest)}
          disabled={battle.status === EBattleStatus.finished}
        >
          Rest
        </Button>
      </Box>
      {battle?.endedRounds.map((x: any, i: number) => (
        <Typography key={i}>
          blueAction: {x.blueAction?.action ?? "none"} redAction:{" "}
          {x.redAction.action}
        </Typography>
      ))}
    </Box>
  );
}
