"use client";
import PetListCard from "@/components/organism/PetListCard";
import PetSlotMachine from "@/components/organism/PetSlotMachine";
import BaseTemplate from "@/components/template/BaseTemplate";

export default function PetsPage() {
  return (
    <BaseTemplate>
      <PetSlotMachine />
      <PetListCard
        name="hello"
        level={1}
        percentToNextLevel={10}
        totalBattles={20}
        type="normal"
        wins={10}
      />
    </BaseTemplate>
  );
}
