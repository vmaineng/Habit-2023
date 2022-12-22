import React, { useState } from "react";
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

function HabitDetails({ habit, deleteHabit, updateHabit }) {
  const [updatedHabit, setUpdatedHabit] = useState(habit);

  const theme = useTheme();

  function handleDeleteHabit(id) {
    fetch(`/api/habits/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    }).then((r) => {
      if (r.ok) {
        deleteHabit(id);
      }
    });
  }

  function handleUpdateHabit(e) {
    e.preventDefault();
    fetch(`/api/habits/${habit._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ updatedHabit}),
    })
      .then((r) => r.json())
      .then((updatedHabit) => {
        updateHabit(updatedHabit);
      });
  }

  return (
    <div>
      HabitDetail
      <Card
        sx={{
          maxWidth: 345,
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
          <form onSubmit={handleUpdateHabit}>
            <input
              type="text"
              // name="updatedHabit"
              placeholder="update description"
              value={updatedHabit}
              onChange={(e) => setUpdatedHabit(e.target.value)}
            />
            <Button size="small">Update</Button>
          </form>
          <Button onClick={() => handleDeleteHabit(habit._id)}>Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default HabitDetails;
