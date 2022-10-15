const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

//process environement vars

const port = process.env.PORT;
const URI = process.env.URI;

// connect to data base

mongoose
  .connect(URI)
  .then(() => {
    console.log("connected to data base");
  })
  .catch((err) => {
    console.log(err);
  });

//middlwars
app.use(express.json());
app.use("/api/User", require("./routes/admin"));

//connect server

app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server is up and running...");
});
