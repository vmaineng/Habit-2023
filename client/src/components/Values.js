import React from 'react'
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Card from '@mui/material/Card';
import Note from "../assets/note.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Goal from "../assets/goal.png";

function Values() {
    const item = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 5,
      };
      
  return (
    <div>
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
    </div>
  )
}

export default Values