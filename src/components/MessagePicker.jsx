import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
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
    <TextField
      component="form"
      required
      label="Countdown Message"
      variant="outlined"
      name="info__email"
      value={value}
      type="input"
      onChange={handleChange}
      onSubmit={onSubmit}
      sx={{ minWidth: 260,
        color: "secondary.main",
      }}
      placeholder="Type a message"
      ariaLabel="Choose countdown message"
      helperText="Write a countdown message"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              type="submit"
              aria-label="submit message"
              sx={{
                transform: "translate(12px, 0px)",
                "&:focus-within": { color: "primary.main" },
                //allow color of icon to change based on focus later
              }}
            >
              <CheckCircleIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
