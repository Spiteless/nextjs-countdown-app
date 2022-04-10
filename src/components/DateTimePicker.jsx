import * as React from "react";
import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";
import moment from "moment";

import { useCountdown } from "../context/AppContext";
import LoadingScreen from "./LoadingScreen";

export default function Picker(props) {
  const [value, setValue] = React.useState(moment());
  const { app, countdown, setCountdown, funcs } = useCountdown();
  const { setRouter } = funcs;

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleAccept = () => {
    const newCountdownState = { ...countdown };
    // newCountdownState.queryDate = value.format("YYYY-MM-DD:HH:mm");
    newCountdownState.queryDate = value.format("YYYY-MM-DDTHH:mm:ss.sssZ");
    setCountdown(newCountdownState);
    setRouter(newCountdownState);
  };

  if (app.isLoaded) {
    return (
      <DateTimePicker
        label="Date&Time picker"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField sx={{minWidth: 250, m: 6}} {...params} />}
        onAccept={handleAccept}
        sx={{margin: 6}}
      />
    );
  } else {
    return <LoadingScreen />;
  }
}
