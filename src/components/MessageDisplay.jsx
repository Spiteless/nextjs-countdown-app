import * as React from "react";
import TextField from "@mui/material/TextField";
import { Typography, Box, Paper } from "@mui/material";
import DateTimePicker from "@mui/lab/DateTimePicker";
import moment from "moment";

import styles from "../styles/Home.module.css";

import { useCountdown } from "../context/AppContext";
import LoadingScreen from "./LoadingScreen";

export default function Picker(props) {
  const [value, setValue] = React.useState(moment());
  const { app, countdown, setCountdown } = useCountdown();

  return (
    <Box sx={{ margin: 0, mb: 0 }}>
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWith: 280,
          maxWidth: 600,
          my: 2,
          mx: 4,
          marginTop: 6, 
        }}
      >
        <Typography
          center
          variant="h3"
          // className={styles.title}
          sx={{ fontWeight: "bold", textAlign: "center", mx: 4, my: 2 }}
        >
          {countdown.message}
        </Typography>
      </Paper>
    </Box>
  );
}
