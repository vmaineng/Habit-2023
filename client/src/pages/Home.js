import { useEffect, useState } from "react";

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
      {habits && habits.map((habit) => <p key={habit.id}>{habit.title} </p>)}
    </div>
  );
}

export default Home;
