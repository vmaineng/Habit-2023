const express = require('express');

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
router.post('/:id', (req, res) => {
    res.json({msg: 'post a new habit'})
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