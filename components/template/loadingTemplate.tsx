import { Box, CircularProgress } from "@mui/material";

export default function LoadingTemplate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
