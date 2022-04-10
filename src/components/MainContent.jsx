import React from "react";
import { Typography, Box } from "@mui/material";

import { useCountdown } from "../context/AppContext";

import styles from "../styles/Home.module.css";

import DateTimePicker from "../components/DateTimePicker";
import MessagePicker from "../components/MessagePicker";
import MessageDisplay from "../components/MessageDisplay";
import Timer from "./Timer";

export default function MainContext() {
  const { countdown } = useCountdown();

  return (
    <Box
      sx={{
        flexDirection: "column",
        justifyContent: "space-around",
        display: "flex",
        minHeight: "50vh",
      }}
    >
      {countdown.message ? (
        <MessageDisplay />
      ) : (
        <MessagePicker sx={{ margin: 36 }} />
      )}
      {countdown.queryDate ? <Timer /> : <DateTimePicker sx={{ margin: 36 }} />}
    </Box>
  );
}
