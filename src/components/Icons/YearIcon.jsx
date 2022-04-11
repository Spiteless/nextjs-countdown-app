import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";

import { helperFuncs } from '.';

export default function YearIcon(props) {
  const { ratio } = props
  const { colorHelper } = helperFuncs

  const style = {
    color: colorHelper(ratio),
  };
  return <PublicTwoToneIcon style={style} />
}
