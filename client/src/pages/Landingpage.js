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
import Values from "../components/Values";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function Landingpage() {
  //let theme = useTheme();

  return (
    <div>
      <Navbar />

      <Paper
        sx={{
          height: 1 / 2,
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
                p: { md: 20 },
                pt: { md: 25 },
              }}
            >
              <Typography component="h1" variant="h1" align="left">
                {" "}
                Capture your habits today!
              </Typography>
              <Typography
                variant="h3"
                color="text.secondary"
                align="left"
              >
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

      {/* Middle Card */}
      <Paper
        sx={{
          mt: 3,
          mb: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={23}>
              <Card sx={{ display: "flex", backgroundColor: "#536B98" }}>
                <CardContent sx={{ flex: 10 }}>
                  <Typography
                    component="h1"
                    variant="h2"
                    color="text.secondary"
                  >
                    Do life well
                  </Typography>
                  <Typography variant="h4" color="text.secondary">
                    And it can be done easily with the help of Habit-sation.
                  </Typography>
                  <Typography
                    variant="h6"
                    paragraph
                    color="text.secondary"
                  >
                    We're making it easy for you to have the life you have
                    always by breaking your goals into small and digestible
                    pieces.
                  </Typography>
                  <Button variant="contained" color="primary">
                  <Link to="/signup">Sign up Today</Link>
                  </Button>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{
                    width: 200,
                    bowShadow: 1,
                    display: { xs: "none", sm: "block" },
                  }}
                  image={Purple}
                />
              </Card>
            
          </Grid>
        </Grid>
      </Paper>

      {/* Values */}
      <Values />

      {/* Receive offers */}
      <Offer />

      <Footer />
    </div>
  );
}

export default Landingpage;
