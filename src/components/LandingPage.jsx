import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHouse, faCode } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TemporaryDrawer from "./Drawer";

function LandingPage() {
  return (
    <div className="container">
      <Container maxWidth="xl" style={{ padding: "" }}>
        <Box
          sx={{
            bgcolor: "rgb(76, 40, 102)",
            height: "100vh",
            color: "#f4f4f4d1",
            marginTop: "15px",
          }}
        >
          <TemporaryDrawer></TemporaryDrawer>

          {/* <div className="image"><img src="../images/profilo.jpg" alt="" /></div> */}
          <div className="presentation-text">
            <div className="inside-presentation-text">
              <span>Mi chiamo, Paolo Cannistraro</span>
            </div>
          </div>
          <div className="font">
            <div className="inside">Ciao</div>
          </div>

          <FontAwesomeIcon icon={faHouse} />
          <FontAwesomeIcon icon={faCoffee} />
        </Box>
      </Container>
    </div>
  );
}

export default LandingPage;
