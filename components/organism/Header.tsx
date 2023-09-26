"use client";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import UserInfo from "../molecule/header/userInfo";
import { useRouter } from "next/navigation";

export default function AppHeader() {
  const router = useRouter();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexGrow={1}
        >
          <Typography variant="h6">Pet battle game</Typography>
          <div>
            <Button color="inherit" onClick={() => router.push("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => router.push("/pets")}>
              Pets
            </Button>
            <Button color="inherit" onClick={() => router.push("/battle")}>
              Battle
            </Button>
          </div>
          <UserInfo />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
