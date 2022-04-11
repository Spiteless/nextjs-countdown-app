import { blue, green, red, orange, yellow } from "@mui/material/colors";

const helperFuncs = {}

helperFuncs.colorHelper =(ratio) => {
  if (ratio > .66) return green[600];
  if (ratio > .33) return yellow[500];
  if (ratio > 0) return red[500];
}

export { helperFuncs }

export { default } from './IconsDisplay.jsx'