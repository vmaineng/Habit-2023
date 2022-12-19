require('dotenv').config();

// const { application } = require('express');
const mongoose = require('mongoose')
const express = require('express')

//routes
const habitRoutes = require('./routes/habits')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

//jwt
// const jwt = require('jsonwebtoken');

//start the server
const app = express();

//global middleware to access request
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

//setting up routes to habits and users
app.use('/api/habits', habitRoutes)
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes);

// connect to DB && async
mongoose.connect(process.env.MONGO_URI)
.then(() => {
//listens for requests once we are connected to the database
app.listen(process.env.PORT, () => {
    console.log('connected to db && listening on port', process.env.PORT)
})
})
.catch((error) => {
    console.log(error)
})



