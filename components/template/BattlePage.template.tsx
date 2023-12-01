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
          findMatch("65690e519a913a3d603b274d", EBattleType.pve);
        }}
      >
        Find Pve Battle
      </Button>
    </>
  );
}
