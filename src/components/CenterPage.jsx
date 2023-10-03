import React from "react";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkMaterial from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function CenterPage() {
  return (
    <div className="presentation-text">
      <div className="inside-presentation-text">
        <span className="my-name">I'm Paolo Cannistraro.</span>
        <p>
          A Full Stack <br /> Web Developer.
        </p>
        <div className="icons">
          <LinkMaterial
            color="inherit"
            href="https://github.com/PaoloCannistraro"
          >
            <IconButton
              style={{ zIndex: "1" }}
              size="large"
              edge="start"
              color="inherit"
            >
              <GitHubIcon className="gitHub-icon" style={{ fontSize: "1em" }} />
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
  );
}

export default CenterPage;
