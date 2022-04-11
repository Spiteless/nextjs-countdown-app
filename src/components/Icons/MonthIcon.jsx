import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";

import { helperFuncs } from '.';

export default function MonthIcon(props) {
  const { ratio } = props;
  const { colorHelper } = helperFuncs

  const style = {
    color: colorHelper(ratio),
  };

  return <CalendarMonthTwoToneIcon style={style} />
}
