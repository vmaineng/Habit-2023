import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Goal from "../assets/goal.png";

function Offer() {
  return (
    <div>
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
    </div>
  )
}

export default Offer