"use client";

import { AuthContext } from "@/context/authContext";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";

export type LoginformProps = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    login(email, password);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Paper sx={{ width: "100%", height: "80vh" }}>
        <Box display="flex" height="100%">
          <Box
            borderRadius="4px 0px 0px 4px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="40%"
            sx={{
              backgroundImage: "url(/login-background.jpg)",
              backgroundSize: "cover",
            }}
          >
            <Stack spacing={3}>
              <Typography variant="h4" color="white">
                Welcome to the game
              </Typography>
              <Typography variant="h6" color="white">
                Please login or register
              </Typography>
            </Stack>
          </Box>
          <Box
            display="flex"
            borderRadius="0px 4px 4px 0px"
            justifyContent="center"
            alignItems="center"
            width="60%"
            p={2}
          >
            <form onSubmit={handleSubmit}>
              <Stack
                alignItems="center"
                maxWidth={400}
                width="100%"
                spacing={2}
              >
                <Typography variant="h4"> Welcome Back</Typography>
                <Typography variant="h6">
                  Please login to your account
                </Typography>
                <TextField
                  fullWidth
                  placeholder="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Box display="flex" width="100%" flexDirection="column">
                  <TextField
                    fullWidth
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Typography variant="caption">
                    i forgot my password ?
                  </Typography>
                </Box>
                <Box display="flex" width="100%" flexDirection="row">
                  <Button type="submit">Login</Button>
                  <Button>Register</Button>
                </Box>
              </Stack>
            </form>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
