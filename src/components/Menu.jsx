import React from "react";
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
import Navbar from "./Navbar"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import CenterPage from "./CenterPage";



function LandingPage() {
  return (
    <div className="container">
      <Container maxWidth="xxxl" style={{ height: "80vh" }}>
        <Box
          sx={{
            bgcolor: "rgb(76, 40, 102)",
            height: "calc(100vh - 48px)",
            color: "#f4f4f4d1",
            marginTop: "24px",
          }}
        >
          <Navbar />
          <TemporaryDrawer></TemporaryDrawer>
          <Router>
            <Routes>
              <Route path="Home." element={<CenterPage />} />
              <Route path="/About." element={<AboutMe />} />
            </Routes>
          </Router>

          <div className="font">
            <div className="inside">Ciao</div>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default LandingPage;
