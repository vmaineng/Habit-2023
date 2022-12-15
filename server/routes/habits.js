const express = require('express');
const Habit = require('../models/Habit')

//creates an instance of router
const router = express.Router();

//get all habits
router.get('/', (req, res) => {
    res.json({msg: 'get all'})
})

//get one habit
router.get('/:id', (req, res) => {
    res.json({msg: 'get a single habit'})
})

//post a new habit
router.post('/', async (req, res) => {
    const {title, description} = req.body
    try {
        const habit = await Habit.create({ title, description})
        res.status(200).json(habit)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
   
})

//delete a habit
router.delete('/:id', (req, res) => {
    res.json({msg: 'delete habit'})
})

//patch a habit
router.patch('/:id', (req, res) => {
    res.json({msg: 'update habit'})
})

module.exports = router;