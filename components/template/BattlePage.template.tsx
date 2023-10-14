"use client";
import { BattleContext } from "@/context/BattleContext";
import { EBattleType } from "@/types/battle/battletype.enum";
import { Button } from "@mui/material";
import { useContext } from "react";
import { Match } from "../organism/battle/Match";

export default function BattleTemplate() {
  const { findMatch, battle } = useContext(BattleContext);

  if (battle) {
    return <Match />;
  }

  return (
    <>
      <Button
        onClick={() => {
          findMatch("65297f3828143201ea5f72c6", EBattleType.pve);
        }}
      >
        Find Pve Battle
      </Button>
    </>
  );
}
