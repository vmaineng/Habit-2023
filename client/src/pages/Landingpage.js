import React from "react";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Purple from "../assets/purple.png";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Note from "../assets/note.png";
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

function Landingpage() {
  let theme = useTheme();
  
  return (
    <div>
      <Navbar />
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container spacing={5}>
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
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={Note}
              alt="suitcase"
              sx={{ height: 150 }}
            />
            <Typography variant="h6" sx={{ my: 5 }}>
              Easy and efficient
            </Typography>
            <Typography variant="h5">{"Star the year with a bang!"}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={Note}
              alt="suitcase"
              sx={{ height: 150 }}
            />
            <Typography variant="h6" sx={{ my: 5 }}>
              Easy and efficient
            </Typography>
            <Typography variant="h5">{"Star the year with a bang!"}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={Note}
              alt="suitcase"
              sx={{ height: 150 }}
            />
            <Typography variant="h6" sx={{ my: 5 }}>
              Easy and efficient
            </Typography>
            <Typography variant="h5">{"Star the year with a bang!"}</Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'lilac' }}
    >

<Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </Box>
            </Box>
          </Grid></Grid></Grid></Grid>
                </Container>
        </Typography>
    </div>
  );
}

export default Landingpage;
