import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { purple, green, grey, yellow } from "@mui/material/colors";
import { useCountdown } from "../context/AppContext";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function NavBar({ drawerWidth, handleDrawerToggle }) {
  const { app, countdown, setCountdown, funcs } = useCountdown();
  const { clearDate, clearMessage, clearAll, setRouter } = funcs;

  const handleDelete = () => {
    clearAll(countdown);
  };

  return (
    <AppBar position="fixed" component="nav" sx={{display: "flex", alignItems: "center"}}>
      <Toolbar sx={{maxWidth: 900, width: "100%"}}>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Countdown Timer
        </Typography>

        <Button
          color="secondary"
          variant="contained"
          onClick={handleDelete}
          startIcon={<DeleteForeverIcon />}
        >
          Delete
        </Button>
      </Toolbar>
    </AppBar>
  );
}
