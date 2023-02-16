require("dotenv").config({path: '.env'});

// const { application } = require('express');
const mongoose = require("mongoose");
const express = require("express");

//routes
const habitRoutes = require("./routes/habits");
const userRoutes = require("./routes/users");

//jwt
// const jwt = require('jsonwebtoken');

//start the server
const app = express();

//global middleware to access request
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//setting up routes to habits and users
app.use("/api/habits", habitRoutes);
app.use("/api/users", userRoutes);

// connect to DB && async
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listens for requests once we are connected to the database
    app.listen(process.env.PORT, () => {
      console.log("connected to db && listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
