const mongoose = require("mongoose");

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
});

const youthModel = mongoose.model("youth", userSchema);
module.exports = youthModel;
