import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TemporaryDrawer from "@mui/material/Drawer";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import CenterPage from "./CenterPage";
import Skills from "./Pages/Skills";
import Presentation from "./Presentation";
import Projects from "./Projects";

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
          <TemporaryDrawer />
          <Router>
            <Routes>
              {/* <Route path="Home." element={<CenterPage />} /> */}
              <Route path="/About" element={<AboutMe />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Home" element={<CenterPage />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          </Router>
          <Presentation />
        </Box>
      </Container>
    </div>
  );
}

export default LandingPage;
