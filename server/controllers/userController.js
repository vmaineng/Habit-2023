const { default: mongoose } = require("mongoose");
const User = require("../models/User");

//get all users
const getUsers = async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json(users);
};

//get a single user
const getUser = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }

  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ error: "Not Found" });
  }
  res.status(200).json(user);
};

//create a User
const createUser = async (req, res, next) => {
  const { username, password, firstName, lastName, profileImage } = req.body;

  try {
    const user = await User.create({
      username,
      password,
      firstName,
      lastName,
      profileImage,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a single user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "Not found!" });
  }

  res.status(200).json({ user });
};

//update a single user
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }

  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(404).json({ error: "Not found!" });
  }

  res.status(200).json({ user });
};

module.exports = { createUser, getUsers, getUser, deleteUser, updateUser };