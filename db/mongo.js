/* eslint-disable no-undef */
const { mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDB;
