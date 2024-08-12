const express = require("express");
const bodyParser = require("body-parser")
const routes = require("./routes");
require("dotenv").config();
require("./confrig/Db");
const app = express();

const PORT = process.env.PORT || 1000;

app.use(bodyParser.json());
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
