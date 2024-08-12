const mongoose = require("mongoose");
const { types } = require("joi");
const schema = mongoose.schema;

//Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: Date,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  addressline1: {
    type: String,
  },
  addressline2: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  education: {
    type: String,
  },
  educationSpecification: {
    type: String,
  },
  educationStatus: {
    type: String,
  },
  referenceBy: {
    type: String,
  },
  folloeUpBy: {
    type: String,
  },
  isSabhaAttending: {
    type: String,
  },
  sabhaID: {
    type: Number,
  },
  updateby: {
    type: String,
  },
  updateAt: {
    type: Date,
  },
  createdBy: {
    type: String,
  },
  createAt: {
    type: Date,
  },

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
const userModel = mongoose.model("Authentication", userSchema);
module.exports = userModel;
