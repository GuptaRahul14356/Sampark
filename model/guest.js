const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  country: {
    type: String,
  },
  pinCode: {
    type: Number,
  },
  sabhaType: {
    type: String,
  },
  leader: {
    type: String,
  },

  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirmPassword: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

sabha = mongoose.model("guest", userSchema);
const guestModel = mongoose.model("Authentication", userSchema);
module.exports = guestModel;
