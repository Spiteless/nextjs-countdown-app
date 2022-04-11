import ScheduleTwoToneIcon from "@mui/icons-material/ScheduleTwoTone";

import { helperFuncs } from '.';

export default function HourIcon(props) {
  const { ratio } = props
  const { colorHelper } = helperFuncs

  const style = {
    color: colorHelper(ratio),
  };

  return <ScheduleTwoToneIcon style={style} />
}
