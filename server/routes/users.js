const express = require("express");
const User = require("../models/User");
const { createUser, getUser, getUsers, deleteUser,updateUser, login, logout } = require("../controllers/userController");
const protectedRoute = require("../middlewares/auth");

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

//login
router.route('/login')
      .post(login)


//logout
router.route('/logout')
      .get(protectedRoute, logout)

module.exports = router;
