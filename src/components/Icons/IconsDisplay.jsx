// import { YearIcon, MonthIcon, DayIcon, HourIcon, SecondIcon } from '.'
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

  return (
    <div>
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
          {Array.from({ length: years }, (_, index) => (
            <Grid item xs style={{ flexGrow: 0 }}>
              <YearIcon
                ratio={index + 1 != years ? 1 : (months * 30 + days) / 365}
                key={`${index}years`}
              />
            </Grid>
          ))}
        </Grid>

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
          {Array.from({ length: months }, (_, index) => (
            <Grid item xs style={{ flexGrow: 0 }}>
              <MonthIcon
                ratio={index + 1 == months ? months / 12 : 1}
                key={`${index}months`}
              />
            </Grid>
          ))}
        </Grid>
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
          {Array.from({ length: days }, (_, index) => (
            <Grid item xs style={{ flexGrow: 0 }}>
              <DayIcon
                ratio={index + 1 == days ? days / 30 : 1}
                key={`${index}days`}
              />
            </Grid>
          ))}
        </Grid>
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
          {Array.from({ length: hours }, (_, index) => (
            <Grid item xs style={{ flexGrow: 0 }}>
              <HourIcon
                ratio={index + 1 == hours ? hours / 24 : 1}
                key={`${index}hours`}
              />
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="flex-start"
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
          {Array.from({ length: minutes }, (_, index) => (
            <Grid item xs style={{ flexGrow: 0 }}>
              <MinuteIcon
                ratio={index + 1 == minutes ? minutes / 60 : 1}
                seconds={index + 1 == minutes ? seconds : 60}
                key={`${index}minutes`}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
