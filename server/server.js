require('dotenv').config();

const { application } = require('express');
const express = require('express')
const habitRoutes = require('./routes/habits')

//start the server
const app = express();

//global middleware to access request
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

//setting up routes to habits
app.use('/api/habits', habitRoutes)


//listens for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})

