import React from 'react'
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkMaterial from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHouse, faCode } from "@fortawesome/free-solid-svg-icons";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TemporaryDrawer from "@mui/material/Drawer";
function CenterPage() {
  return (
    <div>
      <div className="presentation-text">
        <div className="inside-presentation-text">
          <span className="my-name">I'm Paolo Cannistraro.</span>
          <p>
            A Full Stack <br /> Web Developer.
          </p>
          <div className="icons">
            <LinkMaterial color="inherit" href="https://github.com/Mandrake091">
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
            </LinkMaterial>
            <LinkMaterial
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
            </LinkMaterial>
            <LinkMaterial
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
            </LinkMaterial>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterPage