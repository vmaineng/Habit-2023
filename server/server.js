require('dotenv').config();
const express = require('express')

//start the server
const app = express();

//global middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

//setting up routes
app.get('/', (req, res) => {
    res.json({message: "welcome to the app"})
})


//listens for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})

