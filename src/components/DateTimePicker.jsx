import * as React from "react";
import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";
import moment from "moment";

import { useCountdown } from "@context/AppContext";
import LoadingScreen from "./LoadingScreen";

export default function Picker(props) {
  const [value, setValue] = React.useState(null);
  const { app, countdown, setCountdown, funcs } = useCountdown();
  const { setRouter } = funcs;

  const handleChange = (newValue) => {
    setValue(newValue);
    if (!!newValue && newValue.isValid()) {
      const newCountdownState = { ...countdown };
      if (!!value) {
        newCountdownState.queryDate = newValue.format(
          "YYYY-MM-DDTHH:mm:ss.sssZ"
        );
        setCountdown(newCountdownState);
        setRouter(newCountdownState);
      }
    }
  };

  const handleAccept = () => {
    const newCountdownState = { ...countdown };
    if (!!value) {
      newCountdownState.queryDate = value.format("YYYY-MM-DDTHH:mm:ss.sssZ");
      setCountdown(newCountdownState);
      setRouter(newCountdownState);
    }
  };

  if (app.isLoaded) {
    return (
      <DateTimePicker
        label="Date&Time picker"
        value={value}
        onChange={handleChange}
        onSubmit={() => console.log("submit")}
        renderInput={(params) => (
          <TextField
            sx={{
              minWidth: 260,
              // backgroundColor: "yellow",
              // m: 6,
              button: { "&:focus": { color: "primary.main" } },
            }}
            {...params}
            helperText="eg 01/01/2050 05:55 AM"
          />
        )}
        onAccept={handleAccept}
      />
    );
  } else {
    return <LoadingScreen />;
  }
}
