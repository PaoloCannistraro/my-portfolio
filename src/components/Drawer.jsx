import * as React from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHouse, faCode } from "@fortawesome/free-solid-svg-icons";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Button from '@mui/material/Button';

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["About", "Contact", "Prova"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Toolbar style={{ justifyContent: "space-between", alignItems:'center', paddingTop:'20px' }}>
            <div className="title">
              <h1>P.C </h1>
              <FontAwesomeIcon
                style={{
                  fontSize: "2rem",
                  marginLeft: "15px",
                  filter: "drop-shadow(1px 2px 5px black)",
                }}
                icon={faCode}
              />
            </div>
            <IconButton
              onClick={toggleDrawer(anchor, true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <MenuIcon
                style={{ fontSize: "2em" }}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              />
            </IconButton>
          </Toolbar>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
