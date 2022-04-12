import HourglassFullTwoToneIcon from "@mui/icons-material/HourglassFullTwoTone";
import HourglassBottomTwoToneIcon from "@mui/icons-material/HourglassBottomTwoTone";
import HourglassEmptyTwoToneIcon from "@mui/icons-material/HourglassEmptyTwoTone";

import { helperFuncs } from ".";


export default function MinuteIcon(props) {
  const { ratio } = props
  const { colorHelper } = helperFuncs
  // let { seconds } = props
  const seconds = (!props.seconds) ? 1 : props.seconds
  const style = {
    color: colorHelper(ratio),
  };

  if (!ratio) return <HourglassFullTwoToneIcon style={style} {...props} />;

  if (seconds > 40) return <HourglassFullTwoToneIcon style={style} {...props} />;
  if (seconds > 20) return <HourglassBottomTwoToneIcon style={style} {...props} />;
  if (seconds > -1) return <HourglassEmptyTwoToneIcon style={style} {...props} />;
}
