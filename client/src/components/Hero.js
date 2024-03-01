import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Banner from "../assets/banner.png";

function Hero() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 500,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "60%" },
            padding: { xs: 3, sm: 2, md: 5 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography component="h1" variant="h1" >
              {" "}
              Capture your habits today!
            </Typography>
            <Typography variant="h4" color="text.secondary" >
              Best way to change your life is with the click of a button!
            </Typography>
            <Box textAlign="center" m={2}>
              <Button variant="contained" size="large" >
                <Link to="/signup" color="black">Sign up Today</Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Hero;
