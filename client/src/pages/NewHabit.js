import React from "react";
import HabitForm from "../components/HabitForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";

function NewHabit() {
  return (
    <div>
      <Navbar />
      <HabitForm />
      <Box sx={{ mt: 35 }}>
        <Footer />
      </Box>
    </div>
  );
}

export default NewHabit;
