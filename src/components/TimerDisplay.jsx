import { Typography, Box, Paper, Grid } from "@mui/material";

export default function TimerDisplay({ data }) {
  let { years, months, days, hours, seconds, duration, statement } = data;

  const yearsTest = !!years;
  const monthsTest = !!years || !!months;
  const daysTest = !!years || !!months || !!days;
  const hoursTest = !!years || !!months || !!days || !!hours;
  const secondsTest = !!years || !!months || !!days || !!hours || !!seconds;

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
  const interiorDisplay = (
    <>
      {yearsTest && (
        <Grid item xs>
          {years} Years
        </Grid>
      )}
      {monthsTest && (
        <Grid item xs>
          {months} Months
        </Grid>
      )}
      {daysTest && (
        <Grid item xs>
          {days} Days
        </Grid>
      )}
      {hoursTest && (
        <Grid item xs>
          {hours} Hours
        </Grid>
      )}
      {secondsTest && (
        <Grid item xs>
          {seconds} Seconds
        </Grid>
      )}
    </>
  );

  return (
    <Box sx={{ flexGrow: 1, minWidth: 280, whiteSpace: "nowrap" }}>
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          flexGrow: 1,
          minWith: 1,
          maxWidth: 1,
          margin: 6,
        }}
      >
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          style={{ marginTop: 10, minHeight: "100%", height: "100%" }}
        >
          <Typography
            center
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {statement}
          </Typography>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="  "
          style={{ minHeight: "100%", height: "100%" }}
        >
          {duration.as("seconds") > 0 ? interiorDisplay : TimeElapsed}
        </Grid>
      </Paper>
    </Box>
  );
}
