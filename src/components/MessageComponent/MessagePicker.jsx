import TextField from "@mui/material/TextField";

import { useState } from "react";
import { useCountdown } from "@context/AppContext";

const MessagePicker = ({
  selected = ["message"],
  formName,
  helperText,
  placeholder,
  ariaLabel,
  label,
}) => {
  const [value, setValue] = useState("");
  const { countdown, setCountdown, funcs } = useCountdown();
  const { setRouter } = funcs;

  const handleChange = (e) => {
    setValue(e.target.value);
    const newCountdownState = { ...countdown };
    newCountdownState[selected] = e.target.value;
    setCountdown(newCountdownState);
    setRouter(newCountdownState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newCountdownState = { ...countdown };
    newCountdownState[selected] = value;
    setCountdown(newCountdownState);
    setRouter(newCountdownState);
  };

  return (
    <TextField
      component="form"
      required
      label={label || "Countdown Message"}
      variant="outlined"
      name={formName || "message_input"}
      value={value}
      type="input"
      onChange={handleChange}
      onSubmit={onSubmit}
      sx={{ minWidth: 260, color: "secondary.main" }}
      placeholder={placeholder || "Type a message"}
      ariaLabel={ariaLabel || "Choose countdown message"}
      helperText={helperText}
      // InputProps={{
      //   endAdornment: (
      //     <InputAdornment position="end">
      //       <IconButton
      //         type="submit"
      //         aria-label="submit message"
      //         sx={{
      //           transform: "translate(12px, 0px)",
      //           "&:focus-within": { color: "primary.main" },
      //           //allow color of icon to change based on focus later
      //         }}
      //       >
      //         <CheckCircleIcon />
      //       </IconButton>
      //     </InputAdornment>
      //   ),
      // }}
    />
  );
};

MessagePicker.Sub = <MessagePicker selected="subMessage" />;
MessagePicker.Main = <MessagePicker selected="message" />;

export default MessagePicker;
