import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";

export type PetListCardProps = {
  name: string;
  level: number;
  percentToNextLevel: number;
  type: string;
  totalBattles: number;
  wins: number;
  onClick: ()=>void;
};

const PetListCard: NextPage<PetListCardProps> = ({
  name,
  level,
  percentToNextLevel,
  type,
  totalBattles,
  wins,
  onClick
}) => {
  return (
    <Paper sx={{ display: "inline-block", p: 2 }} onClick={onClick}>
      <Typography variant="h6">{name}</Typography>
      <Box display="flex">
        <div>
          <Image
            src="https://play.pokemonshowdown.com/sprites/bw/pikachu.png"
            alt="pica"
            width={96}
            height={96}
          />
        </div>
        <div>
          <Typography variant="body1">Lvl: {level}</Typography>
          <LinearProgress variant="determinate" value={percentToNextLevel} />
          <Typography variant="body1">Type: {type}</Typography>
          <Typography variant="body1">T. Battles: {totalBattles}</Typography>
          <Typography variant="body1">Wins: {wins}</Typography>
        </div>
      </Box>
    </Paper>
  );
};
export default PetListCard;
