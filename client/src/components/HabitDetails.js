import React, {useState} from "react";
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
    method: 'DELETE',
    headers: { Accept: 'application/json'},
  }).then((r) => {
    if (r.ok) {
      deleteHabit(id);
    }
  });
}

function handleUpdateHabit(e) {
  e.preventDefault();
  fetch(`/api/habits/${habit.id}`, {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ habit: updatedHabit }),
  })
    .then((r) => r.json())
    .then((updatedHabit) => {
      updateHabit(updatedHabit);
})
}


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
        <button onClick={() => handleDeleteHabit(habit._id)}>Delete</button>
      </CardActions>
      
      </Card>
    </div>
  );
}

export default HabitDetails;
