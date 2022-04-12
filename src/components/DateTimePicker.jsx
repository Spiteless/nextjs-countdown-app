import * as React from "react";
import TextField from "@mui/material/TextField";
import DateTimePicker from "@mui/lab/DateTimePicker";
import moment from "moment";

import { useCountdown } from "../context/AppContext";
import LoadingScreen from "./LoadingScreen";

export default function Picker(props) {
  const [value, setValue] = React.useState(null);
  const { app, countdown, setCountdown, funcs } = useCountdown();
  const { setRouter } = funcs;

  const handleChange = (newValue) => {
    setValue(newValue);
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
      <div>
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              sx={{
                minWidth: 260,
                m: 6,
                button: { "&:focus": {color: "primary.main"} },
              }}
              {...params}
              helperText="Pick a countdown date"
            />
          )}
          onAccept={handleAccept}
          sx={{ margin: 6 }}
        />
      </div>
    );
  } else {
    return <LoadingScreen />;
  }
}
