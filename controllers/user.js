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
    const isPassEqual = bcrypt.compare(req.body.password, user.password);
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
  const UserModel = new userModel(req.body);
  userModel.password = await bcrypt.hash(req.body.password, 10);
  try {
    const response = await UserModel.save();
    response.password = undefined;
    return res.status(201).json({ message: " Success ", data: response });
  } catch (err) {
    return res.status(500).json({ message: " Error", err });
  }
};

module.exports = {
  login,
  register,
};
