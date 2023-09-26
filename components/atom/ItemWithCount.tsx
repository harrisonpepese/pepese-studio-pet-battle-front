import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";

export interface ItemWithCountProps {
  itemName: string;
  count: number;
  itemImageUrl: string;
}
export default function ItemWithCount({
  count,
  itemImageUrl,
  itemName,
}: ItemWithCountProps) {
  return (
    <Box display="flex" alignItems="self-end">
      <Image src={itemImageUrl} alt={itemName} width={40} height={40} />
      <Typography variant="body1">x {count}</Typography>
    </Box>
  );
}
