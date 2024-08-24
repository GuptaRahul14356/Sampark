const mongoose = require("mongoose");

//Schema
const sabhaSchema = new mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  Country: {
    type: String,
  },
  pinCode: {
    type: Number,
  },
  sabhaType: {
    type: String,
  },
  Leader: {
    type: String,
  },
});

const sabhaModel = mongoose.model("sabha", sabhaSchema);
module.exports = sabhaModel;
