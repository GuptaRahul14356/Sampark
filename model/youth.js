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
  dateOfBirth: {
    type: Date,
    required: true,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  Gender: {
    type: String,
    required: true,
  },
  Education: {
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
  followUpBy: {
    type: String,
  },
  isSabhaAttending: {
    type: String,
  },
  sabhaId: {
    type: Number,
  },
  updateBy: {
    type: String,
  },
  updateAt: {
    type: Date,
  },
  createBy: {
    type: String,
  },
  createAt: {
    type: Date,
  },
});

const youthModel = mongoose.model("youth", userSchema);
module.exports = youthModel;
