import ItemWithCount from "@/components/atom/ItemWithCount";
import { Box, Avatar } from "@mui/material";
import Image from "next/image";

export default function UserInfo() {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <ItemWithCount itemName="Coin" itemImageUrl="/coin.png" count={100} />
      <ItemWithCount itemName="Coin" itemImageUrl="/coin.png" count={100} />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Box>
  );
}
