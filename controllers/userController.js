const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./../models/userModel");

exports.getUsers = (req, res) => {
  res.status(200).send("Fetching all users");
};

exports.createNewUser = async (req, res) => {
  const data = req.body;

  if (!data.name || !data.email || !data.password) {
    throw new Error("Please add all fields");
  }

  const userExists = await User.findOne({ email: data.email });

  if (userExists) {
    res.status(400);
    throw new Error("This email already exists.");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  const user = await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword
  });

  if (user) {
    console.log("here");
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email
    });
  } else {
    res.status(400);
    throw new Error("User registration failed.");
  }
};

exports.updateUser = (req, res) => {
  res.status(200).send("Updated new user");
};

exports.deleteUser = (req, res) => {
  res.status(204).send("User deleted");
};

exports.getDashboard = (req, res) => {
  console.log("test");

  res.status(200).json({
    data: {
      details: "Dashboard Data"
    }
  });
};

exports.validate = (req, res, next) => {
  if (!(req.body && req.body.name)) {
    return res.status(400).json({
      error: "Invalid data"
    });
  }

  next();
};
