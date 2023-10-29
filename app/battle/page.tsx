"use client";
import BaseTemplate from "@/components/template/BaseTemplate";
import BattleTemplate from "@/components/template/BattlePage.template";
import { BattleContextProvider } from "@/context/BattleContext";

export default function PetsPage() {
  return (
    <BattleContextProvider>
      <BattleTemplate />
    </BattleContextProvider>
  );
}
