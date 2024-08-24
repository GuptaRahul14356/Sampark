const { string } = require("joi");
const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  dateofbirth: {
    type: Date,
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
