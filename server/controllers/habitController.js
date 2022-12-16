const Habit = require('../models/Habit');

//get all habits
const getHabits = async (req, res, next) => {
    const habits = await Habit.find({}).sort({createdAt: -1})

    res.status(200).json(habits)
}

//get a single habit
const getHabit = async (req, res) => {
    const {id} = req.params

    const habit = await Habit.findById(id)
    if (!habit) {
        return res.status(404).json({error: 'Not Found'})
    }

    res.status(200).json(habit)
}


//create a new habit
const createHabit = async (req, res, next) => {
    const {title, description} = req.body
    try {
        const habit = await Habit.create({ title, description})
        res.status(200).json(habit)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}


//delete a single habit



//update a single habit


module.exports = {createHabit, getHabits, getHabit}