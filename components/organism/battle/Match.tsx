import { BattlePetInfo } from "@/components/molecule/BattlePetInfo";
import { BattleContext } from "@/context/BattleContext";
import { EBattleAction } from "@/types/battle/battleAction.enum";
import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";

export function Match() {
  const { reset, battle, sendRoundAction } = useContext(BattleContext);
  const { blueTeam, redTeam } = battle;
  return (
    <Box display="flex" flexDirection="column">
      <Typography>Battle uuid: {battle.uuid}</Typography>
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
        />
        <Typography variant="h3">X</Typography>
        <BattlePetInfo
          petName={redTeam.pet.name}
          life={redTeam.pet.status.currentHealth}
          stamina={redTeam.pet.status.currentStamina}
          maxstamina={redTeam.pet.status.stamina}
          maxLife={redTeam.pet.status.health}
        />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <Button
          variant="contained"
          onClick={() => sendRoundAction(EBattleAction.attack)}
        >
          Basic attack
        </Button>
        <Button
          variant="contained"
          onClick={() => sendRoundAction(EBattleAction.defense)}
        >
          Defensive Position
        </Button>
        <Button
          variant="contained"
          onClick={() => sendRoundAction(EBattleAction.dodge)}
        >
          Try dodge
        </Button>
        <Button
          variant="contained"
          onClick={() => sendRoundAction(EBattleAction.rest)}
        >
          Rest
        </Button>
      </Box>
    </Box>
  );
}
