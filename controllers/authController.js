const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new userModel({
      ...req.body,
      password: hashedPassword,
    });

    await user.save();

    return res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });

  } catch (error) {
    console.log("REGISTER ERROR:", error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

// LOGIN
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const comparePassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!comparePassword) {
      return res.status(401).send({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).send({
      success: false,
      message: "Error In Login API",
      error,
    });
  }
};

// CURRENT USER
const currentUserController = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);

    return res.status(200).send({
      success: true,
      message: "User fetched successfully",
      user,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Unable to get current user",
      error,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  currentUserController,
};