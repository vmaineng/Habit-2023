import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Button,
  Grid,
  Divider,
  TextField,
  useTheme,
} from "@mui/material";

function HabitForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const habit = { title, description, category };

    const response = await fetch("/api/habits", {
      method: "POST",
      body: JSON.stringify(habit),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setCategory("");
      setError(null);
      console.log("new habit added");
      navigate("/home");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card
          sx={{
            mt: 5,
            marginLeft: "10%",
            color: "navy",
            bgcolor: "#EDE9FF",
            border: "1px solid navy",
            width: "75%",
          }}
        >
          <CardHeader
            subheader="The information can be edited"
            title="Add a new habit"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the habit title"
                  label="Habit title"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  value={title}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the description"
                  label="Habit description"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  value={description}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the category"
                  label="Habit category"
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  value={category}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <Button color="primary" variant="contained" type="submit">
              Add new habit
            </Button>
          </Box>
        </Card>
        {error && error}
      </form>
    </div>
  );
}

export default HabitForm;
