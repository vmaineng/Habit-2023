import React from "react";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Purple from "../assets/purple.png";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Note from "../assets/note.png";

import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer";

function Landingpage() {
  let theme = useTheme();

  const item = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
  };

  return (
    <div>
      <Navbar />

      <Container
        sx={{
          mt: 3,
          mb: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: "common.black",
                opacity: 0.5,
                zIndex: -1,
              }}
            /> */}

            <Typography
              color="inherit"
              align="center"
              variant="h2"
              marked="center"
            >
              Habit Breaker
            </Typography>
            <img src={Purple} alt="wonder" width="1100" height="500" />
          </Grid>
        </Grid>
      </Container>

      {/* Values */}
      <Box
        component="section"
        sx={{ display: "flex", overflow: "hidden", bgcolor: "cyan" }}
      >
        <Container
          sx={{ mt: 1, mb: 10, display: "flex", position: "relative" }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={Note}
                  alt="notepad"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                  Motivated
                </Typography>
                <Typography variant="h5">
                  {
                    "Track your habits, set goals, and stay motivated to reach them!"
                  }
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={Note}
                  alt="notepad"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                  Positivity
                </Typography>
                <Typography variant="h5">
                  {"A simple way to build positive habits and break bad ones."}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={Note}
                  alt="suitcase"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" sx={{ my: 3 }}>
                  Empower
                </Typography>
                <Typography variant="h5">
                  {"Create powerful habits and make your dreams come true!"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </div>
  );
}

export default Landingpage;
