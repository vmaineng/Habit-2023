import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import {
  CardContent,
  Card,
  CardMedia,
  Paper,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import Purple from "../assets/purple.png";
import Values from "../components/Values";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div>
      <Navbar />
      <Hero />

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
                <Typography component="h1" variant="h2" color="text.secondary">
                  Do life well
                </Typography>
                <Typography variant="h4" color="text.secondary">
                  And it can be done easily with the help of Habit-sation.
                </Typography>
                <Typography variant="h6" paragraph color="text.secondary">
                  We're making it easy for you to have the life you have always
                  by breaking your goals into small and digestible pieces.
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
