import Brightness4TwoToneIcon from '@mui/icons-material/Brightness4TwoTone';

import { helperFuncs } from '.';

export default function DayIcon(props) {
  const { ratio } = props;
  const { colorHelper } = helperFuncs

  const style = {
    color: colorHelper(ratio),
  };

  return <Brightness4TwoToneIcon style={style} />
}
