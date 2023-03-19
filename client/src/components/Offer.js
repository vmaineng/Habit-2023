import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Goal from "../assets/goal.png";

function Offer() {
  return (
    <div>
      <Container sx={{ mt: 8, display: "flex", mb: 10 }}>
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "1px dashed grey",
                py: 8,
                px: 3,
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Box sx={{ maxWidth: 400 }}>
                <Typography variant="h3" component="h3" gutterBottom>
                  Receive offers
                </Typography>
                <Typography variant="h5">
                  Taste the holidays of the everyday close to home.
                </Typography>

                <TextField
                  id="outlined-basic"
                  color="lilac"
                  variant="filled"
                  label="Email address"
                  margin="dense"
                />

                <Stack direction="row" spacing={5}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ width: "100%" }}
                  >
                    Keep me updated
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { md: "block" }, position: "relative" }}
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
                width: "500%",
                maxWidth: 800,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Offer;
