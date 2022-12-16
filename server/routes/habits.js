const express = require("express");
const Habit = require("../models/Habit");
const { createHabit, getHabit, getHabits, deleteHabit,updateHabit } = require("../controllers/habitController");

//creates an instance of router
const router = express.Router();

//get all habits
router.get("/", getHabits);

//get one habit
router.get("/:id", getHabit);

//post a new habit
router.post("/", createHabit);

//delete a habit
router.delete("/:id", deleteHabit);

//patch a habit
router.patch("/:id", updateHabit);

module.exports = router;
