import React from "react";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Purple from "../assets/purple.png";
import Banner from "../assets/banner.png";
import Goal from "../assets/goal.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Note from "../assets/note.png";
//import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer";

import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function Landingpage() {
  //let theme = useTheme();

  const item = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
  };

  return (
    <div>
      <Navbar />

      <Paper
        sx={{
         height: 1/2,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${Banner})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: "none" }} src={Banner} alt={Banner} />}

        <Grid container>
          <Grid item md={8}>
            <Box
              sx={{
                position: "relative",
                p: {md: 20},
                pt: { md: 25 },
              }}
            >
              <Typography component="h2" variant="h2" align="left"> Capture your habits today!</Typography>
              <Typography variant="subtitle1" color="text.secondary" align="left">
              Best way to change your life is with the click of a button!
            </Typography>
              <Box textAlign="left" m={1}>
                <Button variant="contained" size="large">
                  <Link to="/signup">Sign up Today</Link>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

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
            <img src={Purple} alt="wonder" width="1100" height="500" />
          </Grid>
        </Grid>
      </Container>

      {/* Values */}
      <Box
        component="section"
        sx={{ display: "flex", overflow: "hidden", bgcolor: "tan" }}
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

      {/* Receive offers */}
      <Container component="section" sx={{ mt: 8, display: "flex", mb: 10 }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                bgcolor: "cyan",
                py: 8,
                px: 3,
              }}
            >
              <Box sx={{ maxWidth: 400 }}>
                <Typography variant="h2" component="h2" gutterBottom>
                  Receive offers
                </Typography>
                <Typography variant="h5">
                  Taste the holidays of the everyday close to home.
                </Typography>
                <input type="text" placholder="Your email" />
                <br />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{ width: "100%" }}
                >
                  Keep me updated
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
          >
            <Box
              component="img"
              src={Goal}
              alt="goal"
              sx={{
                position: "absolute",
                top: -28,
                left: -28,
                right: 0,
                bottom: 0,
                width: "300%",
                maxWidth: 700,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </div>
  );
}

export default Landingpage;
