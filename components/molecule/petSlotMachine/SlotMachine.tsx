import ItemWithCount from "@/components/atom/ItemWithCount";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
export interface ISlotMachineProps {
  slotType: string;
  price: number;
  itemImageUrl: string;
}
export default function SlotMachine({
  slotType,
  price,
  itemImageUrl,
}: ISlotMachineProps) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6">{slotType}</Typography>
      <Image src={itemImageUrl} alt="SlotMachine" width={64} height={64} />
      <ItemWithCount itemName="Coin" itemImageUrl="/coin.png" count={price} />
      <Button variant="contained">buy</Button>
    </Box>
  );
}
