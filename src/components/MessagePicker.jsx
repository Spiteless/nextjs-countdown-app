import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useState } from "react";
import { useCountdown } from "../context/AppContext";

export default function CustomizedInputBase() {
  const [value, setValue] = useState("");
  const { countdown, setCountdown, funcs } = useCountdown();
  const { setRouter } = funcs;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newCountdownState = { ...countdown };
    newCountdownState.message = value;
    setCountdown(newCountdownState);
    setRouter(newCountdownState);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        minWith: 280,
        maxWidth: 600,
        margin: 6,
        mb: 0
      }}
      onSubmit={onSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={value}
        placeholder="Type message and press Enter"
        onChange={handleChange}
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="input message">
        <CheckCircleIcon />
      </IconButton>
    </Paper>
  );
}
