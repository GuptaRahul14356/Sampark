const userModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({
        message: "Authentication failed, Invalid username/password",
      });
    }
    const isPassEqual = await bcrypt.compare(req.body.password, user.password);
    if (!isPassEqual) {
      return res.status(401).json({
        message: "Authentication failed, Invalid username/password",
      });
    }
    const tokenObject = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    };
    const jwtToken = jwt.sign(tokenObject, process.env.SECRET, {
      expiresIn: "3h",
    });
    return res.status(200).json({
      jwtToken,
      tokenObject,
    });
  } catch (err) {
    return res.status(500).json({
      message: "error",
      err,
    });
  }
};

const register = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = req.body;
  user.password = hashedPassword;
  console.log("hashedPassword", hashedPassword);

  const UserModel = new userModel(user);
  try {
    const response = await UserModel.save();
    return res.status(201).json({ message: " Success ", data: response });
  } catch (err) {
    return res.status(500).json({ message: " Error", err });
  }
};

getUsers = async (req, res) => {};

module.exports = {
  login,
  register,
  getUsers,
};
