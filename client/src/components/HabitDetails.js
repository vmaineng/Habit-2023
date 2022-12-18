import React from "react";
import {
  Box,
  Card,
  CardContent,

  Container,
  Grid,
  Divider,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import FeedIcon from '@mui/icons-material/Feed';

function HabitDetails({ habit }) {
  const theme = useTheme();

  return (
    <div>
      HabitDetail
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pb: 3,
            }}
          >
            <IconButton> 
            <FeedIcon />
            </IconButton>
             </Box>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h5"
            >
              {" "}
              {habit.title}
            </Typography>
            <Typography align="center" color="textPrimary" variant="body1">
              {habit.description}
            </Typography>
         
        </CardContent>
      </Card>
    </div>
  );
}

export default HabitDetails;
