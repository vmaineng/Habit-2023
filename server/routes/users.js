const express = require("express");
const User = require("../models/User");
const { createUser, getUser, getUsers, deleteUser,updateUser } = require("../controllers/userController");

//creates an instance of router
const router = express.Router();

//get all user
router.get("/", getUsers);

//get one user
router.get("/:id", getUser);

//post a new user
router.post("/", createUser);

//delete a user
router.delete("/:id", deleteUser);

//patch a user
router.patch("/:id", updateUser);

module.exports = router;
