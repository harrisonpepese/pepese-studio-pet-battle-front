"use client";
import PetListCard from "@/components/organism/PetListCard";
import BaseTemplate from "@/components/template/BaseTemplate";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function PetsPage() {
  const router = useRouter();
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const goToPetDetail = (id:string)=>{
    router.push(`pets/${id}`)
  }
  return (
    <BaseTemplate>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h5">
          My pets
        </Typography>
        <Box display="flex" gap={4}>
          <TextField variant="standard" placeholder="Filter" />
          <Button variant="contained">Filter</Button>

        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {
          array.map(x => (
            <PetListCard
              key={x}
              name="hello"
              level={1}
              percentToNextLevel={10}
              totalBattles={20}
              type="normal"
              wins={10}
              onClick={()=>goToPetDetail('1')}
            />
          ))
        }

      </Box>
    </BaseTemplate>
  );
}
