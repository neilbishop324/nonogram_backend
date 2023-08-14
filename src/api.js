const express = require('express')
const mongoose = require('mongoose')
const serverless = require('serverless-http')
require('dotenv').config()

const PORT = process.env.PORT || 3000;
const app = express();

const DB = process.env.DB;

app.use(express.json())

const puzzlesRouter = require("../routes/puzzles")

mongoose
    .connect(DB)
    .then(() => {
        console.log("Connection Successful");
    }).catch((e) => {
        console.log(e);
    }); 

app.listen(3000, "0.0.0.0", () => {
    console.log(`Server Started at ${PORT}`)
})

app.use('/', puzzlesRouter)

module.exports.handler = serverless(app)