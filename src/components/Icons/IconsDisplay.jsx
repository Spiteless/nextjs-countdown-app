import { Typography, Box, Paper, Grid } from "@mui/material";
import { styled } from "@mui/system";

import YearIcon from "./YearIcon";
import MonthIcon from "./MonthIcon";
import DayIcon from "./DayIcon";
import HourIcon from "./HourIcon";
import MinuteIcon from "./MinuteIcon";

import moment from "moment";

const StyledGrid = styled;
export default function IconsDisplay({ data }) {
  let {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    duration,
    statement,
    start,
    end,
  } = data;

  const yearsTest = !!years;
  const monthsTest = yearsTest || !!months;
  const daysTest = monthsTest || !!days;
  const hoursTest = daysTest || !!hours;
  const minutesTest = hoursTest || !!minutes;
  const secondsTest = minutesTest || !!seconds;

  const IconsFill = (amount, icon, keyName) => {
    const Element = icon();
    console.log(amount, icon, keyName);
    return Array(amount)
      .fill()
      .map((val, index) => <Element key={`${index}${keyName}`} />);
  };

  function timeTransform(startDate, endDate) {
    const endOfMonth = startDate.endOf("month");
    const daysToEnd = endOfMonth.diff(moment(), "days");
    let days = daysToEnd;

    console.log(startDate, endDate, daysToEnd);
  }

  function renderInterior(Component, timeValue, timeWord) {
    // needs helper function that grabs the end of a time
    // perior for ratio 

    // ratio={index + 1 != years ? 1 : (months * 30 + days) / 365}
    // ratio={index + 1 == months ? months / 12 : 1}
    // ratio={index + 1 == days ? days / 30 : 1}
    // ratio={index + 1 == hours ? hours / 24 : 1}
    // ratio={index + 1 == minutes ? minutes / 60 : 1}

    return (
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="start"
        style={{
          marginTop: 0,
          minHeight: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
        key={`${timeWord}Parent`}
      >
        {Array.from({ length: timeValue }, (_, index) => (
          <Grid item xs style={{ flexGrow: 0 }}>
            <Component
              key={`${index}${timeWord}`}
            />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="start"
      style={{
        marginTop: 0,
        minHeight: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {renderInterior(YearIcon, years, "years")}
      {renderInterior(MonthIcon, months, "months")}
      {renderInterior(DayIcon, days, "days")}
      {renderInterior(HourIcon, hours, "hours")}
      {renderInterior(MinuteIcon, minutes, "minutes")}
    </Grid>
  );
}
