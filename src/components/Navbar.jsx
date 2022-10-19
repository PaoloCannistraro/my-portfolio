import * as React from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import { faCoffee, faHouse, faCode } from "@fortawesome/free-solid-svg-icons";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
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
      <List className="drawer-list">
        {["Home.", "About.", "Skills."].map((text, index) => (
          <a key={index} href={text}>
            <ListItem className="text-list" key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Toolbar
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "20px",
            }}
          >
            <div className="title">
              <h1>PC</h1>
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
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon className="menu-icon" style={{ fontSize: "2em" }} />
            </IconButton>
          </Toolbar>

          <Drawer
            className="drawer"
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="drawer-layout">
              <div
                className="column-left"
                style={{
                  color: "white",
                }}
              >
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <div className="image">
                    <img src="../images/profilo.jpg" alt="" />
                  </div>
                  <div className="in-touch">
                    <span className="stay">
                      Stay <br /> in touch.
                    </span>
                    <div className="icons-in-touch">
                      <Link
                        color="inherit"
                        href="https://github.com/Mandrake091"
                      >
                        <IconButton
                          style={{ zIndex: "1" }}
                          size="large"
                          edge="start"
                          color="inherit"
                        >
                          <GitHubIcon
                            className="gitHub-icon"
                            style={{ fontSize: "1em" }}
                          />
                        </IconButton>
                      </Link>
                      <Link
                        color="inherit"
                        href="https://www.linkedin.com/in/paolo-cannistraro-167955242/"
                      >
                        <IconButton
                          style={{ zIndex: "1" }}
                          size="large"
                          edge="start"
                          color="inherit"
                        >
                          <LinkedInIcon
                            className="linkedIn-icon"
                            style={{ fontSize: "1em" }}
                          />
                        </IconButton>
                      </Link>
                      <Link
                        color="inherit"
                        href="https://www.instagram.com/cannistraro_paolo/"
                      >
                        <IconButton
                          style={{ zIndex: "1" }}
                          size="large"
                          edge="start"
                          color="inherit"
                        >
                          <InstagramIcon
                            className="instagram-icon"
                            style={{ fontSize: "1em" }}
                          />
                        </IconButton>
                      </Link>
                    </div>
                    <p>cannistraro91@gmail.com</p>
                    <p>+393209308277</p>
                    <p>Bologna, Emilia-Romagna</p>
                  </div>
                </Box>
              </div>

              {list(anchor)}
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
