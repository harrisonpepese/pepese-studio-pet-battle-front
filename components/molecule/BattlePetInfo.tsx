import { Box, LinearProgress, Typography } from "@mui/material";
import Image from "next/image";

export type BattlePetInfoProps = {
  petName: string;
  life: number;
  maxLife: number;
  stamina: number;
  maxstamina: number;
  xp: number;
};
export function BattlePetInfo({
  petName,
  life,
  maxLife,
  stamina,
  maxstamina,
  xp,
}: BattlePetInfoProps) {
  return (
    <Box display="flex" flexDirection="column">
      <Box>Player: playername</Box>
      <Box>Pet: {petName}</Box>
      <Box>xp: {xp}</Box>
      <Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography component="span">life:</Typography>
          <Typography component="span">
            {life}/{maxLife}
          </Typography>
        </Box>
        <LinearProgress
          color="error"
          variant="determinate"
          value={(life * 100) / maxLife}
        />
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography component="span">stm:</Typography>
        <Typography component="span">
          {stamina}/{maxstamina}
        </Typography>
      </Box>
      <LinearProgress
        color="warning"
        variant="determinate"
        value={(stamina * 100) / maxstamina}
      />
      <Image
        src="https://play.pokemonshowdown.com/sprites/bw/pikachu.png"
        alt="pica"
        width={128}
        height={128}
      />
    </Box>
  );
}
