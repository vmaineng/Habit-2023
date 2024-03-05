import { useEffect, useState } from "react";
import HabitDetails from "../components/HabitDetails";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

function DashboardGoals() {
  // const theme = useTheme();

  const [habits, setHabits] = useState([]);

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

  function updateHabit(updatedHabit) {
    const updatedHabits = habits.map((habit) => {
      return habit.id === updatedHabit.id ? updatedHabit : habit;
    });
    setHabits(updatedHabits);
  }

  // const searchWord = habits.filter((habit) => {
  //   return habit.title.toLowerCase().includes(habits.toLowerCase())
  // })

  return (
    <div>
      {/* <Search  /> */}
      <Grid item lg={8} md={12} xl={9} xs={12}>
        {habits &&
          habits.map((habit) => (
            <HabitDetails
              key={habit._id}
              habit={habit}
              deleteHabit={deleteHabit}
              updateHabit={updateHabit}
            
            />
          ))}
        {/* <HabitForm /> */}
        <br />
        <Link to="/new" align="center" underline="always">
          Add new habit
        </Link>
      </Grid>
    </div>
  );
}

export default DashboardGoals;
