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
  FormControlLabel,
  Checkbox,
  Stack,
} from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import { useForm, Controller } from "react-hook-form";

function HabitDetails({ habit, deleteHabit, updateHabit }) {
  const [updatedHabit, setUpdatedHabit] = useState({
    title: habit.title,
    description: habit.description,
  });

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
      body: JSON.stringify(updatedHabit),
    })
      .then((r) => r.json())
      .then((updatedHabits) => {
        updateHabit(updatedHabits);
      });
  }

  // function handleHabitChange(e) {
  //   setUpdatedHabit((updatedHabit) => ({
  //     ...updatedHabit,
  //     [e.target.des
  //   }))
  // }

  const { control } = useForm({
    defaultValues: {
      taskCompleted: ["2"],
    },
  });

  return (
    <div>
      HabitDetail
      <Card
        sx={{
          maxWidth: 500,
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
          <Stack
            direction="column"
            sx={{
              px: 12,
              py: 0.75,
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={habit.title}
              sx={{ flexGrow: 1, m: 0 }}
            />
          

          <form onSubmit={handleUpdateHabit}>
            <input
              type="text"
              name="updatedHabit"
              placeholder="update description"
              value={updatedHabit.description}
              onChange={(e) => setUpdatedHabit(e.target.value)}
            />
            <Button size="small">Update</Button>
            <Button onClick={() => handleDeleteHabit(habit._id)}>Delete</Button>
          </form>
          </Stack>
          {/*     
          <Button onClick={() => handleDeleteHabit(habit._id)}>Delete</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}

export default HabitDetails;
