/* eslint-disable no-undef */
const http = require("http");
const connectDB = require("./db/mongo");
const app = require("./routes/index");
const server = http.createServer(app);
require("dotenv").config();

const PORT = process.env.PORT;

// connection
connectDB();

server.listen(PORT, () => console.log("Server started at port:", PORT));
