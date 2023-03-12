const { default: mongoose } = require("mongoose");
const Habit = require("../models/Habit");

//get all habits
const getHabits = async (req, res, next) => {
  const habits = await Habit.find({}).sort({ createdAt: -1 });

  res.status(200).json(habits);
};

//get a single habit
const getHabit = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }

  const habit = await Habit.findById(id);
  if (!habit) {
    return res.status(404).json({ error: "Not Found" });
  }

  res.status(200).json(habit);
};

//create a new habit
const createHabit = async (req, res, next) => {
  const { title, description, category } = req.body;
  try {
    const habit = await Habit.create({ title, description, category });
    res.status(200).json(habit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a single habit
const deleteHabit = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }

  const habit = await Habit.findOneAndDelete({ _id: id });

  if (!habit) {
    return res.status(404).json({ error: "Not found!" });
  }

  res.status(200).json({ habit });
};

//update a single habit
const updateHabit = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }
 // const habit = await Habit.findOneAndUpdate( - old sql method; trying new one
  const habit = await Habit.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!habit) {
    return res.status(404).json({ error: "Not found!" });
  }

  res.status(200).json({ habit });
};

module.exports = { createHabit, getHabits, getHabit, deleteHabit, updateHabit };
