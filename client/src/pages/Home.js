import { useEffect, useState } from "react";
import HabitDetails from "../components/HabitDetails";
import HabitForm from "../components/HabitForm";

function Home() {
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

  return (
    <div>
      Home
      {habits && habits.map((habit) => (
        <HabitDetails key={habit._id} habit={habit} /> 
      ))}
      <HabitForm />
    </div>
  );
}

export default Home;
