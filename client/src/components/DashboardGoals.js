import { useEffect, useState } from "react";
import HabitDetails from "../components/HabitDetails";
import HabitForm from "../components/HabitForm";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";

function DashboardGoals() {
  const theme = useTheme();

  const [habits, setHabits] = useState(null);

  useEffect(() => {
    const fetchHabits = async () => {
      const response = await fetch("/api/habits");
      const json = await response.json();
      if (response.ok) {
        setHabits(json);
      }
    };

    fetchHabits();
  }, []);

  function deleteHabit(id) {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabits);
  }

  return (
    <div>
      <Grid item lg={8} md={12} xl={9} xs={12}>
        {habits &&
          habits.map((habit) => (
            <HabitDetails
              key={habit._id}
              habit={habit}
              deleteHabit={deleteHabit}
            />
          ))}
        <HabitForm />
      </Grid>
    </div>
  );
}

export default DashboardGoals;
