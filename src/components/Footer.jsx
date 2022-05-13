import React from "react";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import styles from "../styles/Home.module.css";

import { useCountdown } from "@context/AppContext";

export default function Footer() {
  const { app, countdown, setCountdown } = useCountdown();

  return (
    <AppBar color="primary" sx={{ top: "auto", bottom: 0, height: 38 }}>
      <Box
        as="footer"
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 1,
          mb: 0,
        }}
      >
        <Typography
          sx={{
            display: "inline-block",
            whiteSpace: "pre",
            fontWeight: "bold",
          }}
        >
          Created by Trillium Smith
        </Typography>
      </Box>
    </AppBar>
  );
}
