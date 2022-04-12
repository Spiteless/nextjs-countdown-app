import { Typography, Box, Paper, Grid } from "@mui/material";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import ScheduleTwoToneIcon from "@mui/icons-material/ScheduleTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import { blue, green, red, orange, yellow } from "@mui/material/colors";

import IconsDisplay from "./Icons/IconsDisplay";
import MinuteIcon from "./Icons/MinuteIcon";

export default function TimerDisplay({ data }) {
  let { years, months, days, hours, minutes, seconds, duration, statement } =
    data;

  const yearsTest = !!years;
  const monthsTest = yearsTest || !!months;
  const daysTest = monthsTest || !!days;
  const hoursTest = daysTest || !!hours;
  const minutesTest = hoursTest || !!minutes;
  const secondsTest = minutesTest || !!seconds;

  const TimeElapsed = (
    <Grid item xs>
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          minWith: 280,
          maxWidth: 600,
          margin: 6,
        }}
      >
        <Typography
          center
          variant="h3"
          // className={styles.title}
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Time Elapsed!
        </Typography>
      </Paper>
    </Grid>
  );

  const renderInterior = (test, timeValue, timeWord) => {
    if (test) {
      return (
        <Grid item xs>
          {timeValue} {timeWord}
        </Grid>
      );
    }
    return <></>;
  };

  const interiorDisplay = (
    <>
      {renderInterior(yearsTest, years, "Years")}
      {renderInterior(monthsTest, months, "Months")}
      {renderInterior(daysTest, days, "Days")}
      {renderInterior(hoursTest, hours, "Hours")}
      {renderInterior(minutes, minutes, "Minutes")}
      {renderInterior(seconds, seconds, "Seconds")}
    </>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        whiteSpace: "nowrap",
      }}
    >
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          justifyContet: "center",
          flexDirection: "column",
          flexGrow: 1,
          minWith: 1,
          maxWidth: 1,
          maxWidth: 600,
          my: 2,
          mx: 4,
        }}
      >
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          style={{
            justifyContent: "center",
            marginTop: 10,
            minHeight: "100%",
            height: "100%",
            mx: 4,
          }}
        >
          <Typography
            center
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {statement}
          </Typography>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          style={{
            minHeight: "100%",
            height: "100%",
            mx: 4,
            px: 4,
            paddingLeft: 40,
            paddingRight: 40,
            overflow: "hidden",
          }}
        >
          {duration.as("seconds") > 0 ? interiorDisplay : TimeElapsed}
        </Grid>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          style={{
            minHeight: "100%",
            height: "100%",
            my: 4,
            py: 4,
            paddingLeft: 40,
            paddingRight: 40,
          }}
        >
          <IconsDisplay data={data} />
        </Grid>
      </Paper>
    </Box>
  );
}
