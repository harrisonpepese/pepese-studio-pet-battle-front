import { Box, Paper } from "@mui/material";
import SlotMachine from "../molecule/petSlotMachine/SlotMachine";

export default function PetSlotMachine() {
  return (
    <Paper>
      <Box display="flex" gap={2} padding={2}>
        <SlotMachine />
        <SlotMachine />
        <SlotMachine />
      </Box>
    </Paper>
  );
}
