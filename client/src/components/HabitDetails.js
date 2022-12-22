import React from "react";
import {
  Box,
  Card,
  CardContent,
 Button,
CardActions,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";

function HabitDetails({ habit }) {
  const theme = useTheme();

  return (
    <div>
      HabitDetail
      <Card
        sx={{
          maxWidth: 345
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
            // align="center"
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {" "}
            {habit.title}
          </Typography>
          <Typography color="textPrimary" variant="body1">
            {habit.description}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Update</Button>
        <Button size="small">Delete</Button>
      </CardActions>
      
      </Card>
    </div>
  );
}

export default HabitDetails;
