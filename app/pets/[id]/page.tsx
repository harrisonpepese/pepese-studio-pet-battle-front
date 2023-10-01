'use client';
import BaseTemplate from "@/components/template/BaseTemplate";
import { useParams } from "next/navigation";

export default function PetDetailPage() {
    const params = useParams()
    const { id } = params;
    return (
        <BaseTemplate>
            pet detail base {id}
        </BaseTemplate>
    )
} 