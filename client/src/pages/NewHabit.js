import React from "react";
import HabitForm from "../components/HabitForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NewHabit() {
  return (
    <div>
      <Navbar />
      <HabitForm />
      <Footer />
    </div>
  );
}

export default NewHabit;
