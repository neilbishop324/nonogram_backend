const express = require("express");
const mongoose = require("mongoose");
const serverless = require("serverless-http");
const path = require("path");
require("dotenv").config();

const app = express();
const DB = process.env.DB;

app.use(express.json());

const puzzlesRouter = require("../routes/puzzles");

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.use("/", puzzlesRouter);

module.exports = app;
module.exports.handler = serverless(app);
