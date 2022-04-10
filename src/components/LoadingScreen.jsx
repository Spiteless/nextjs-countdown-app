import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function LoadingScreen() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Box>
          <h1>Loading</h1>
        </Box>
      </Grid>
    </Grid>
  );
}
