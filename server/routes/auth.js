const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { response } = require('express');

const router = express.Router();

//signup route
router.post('/signup', async (req, res) => {
    const {username, password, firstName, lastName, profileImage} = req.body;

    try {
        //check to see if user already exists
        user = await User.findOne({username: username});
        if (user) {
        return res.status(400).json({msg: 'Username already exists'}) 
        }

        //create a new user
        user = new User({
            username,
            password,
            firstName,
            lastName,
            profileImage
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})


//login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: "Email or password incorrect"});
        }

        //check if encrypted password matches
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ msg: "Email or password incorrect"});
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

