"use client";
import BaseTemplate from "@/components/template/BaseTemplate";
import { useParams } from "next/navigation";
import { PetDetail } from "@/components/organism/PetDetail";

export default function PetDetailPage() {
  const params = useParams();
  const { id } = params;
  return (
    <BaseTemplate>
      <PetDetail pet={{}as any} />      
    </BaseTemplate>
  );
}
