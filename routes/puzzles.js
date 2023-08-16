const express = require("express")
const Game = require("../models/Game")
const puzzlesRouter = express.Router()

//Get Puzzles

puzzlesRouter.get("/puzzles", async (req, res) => {
    try {
        let limit = req.query.limit
        let skip = req.query.skip

        const games = await Game.find({}).sort({date: -1}).skip(skip).limit(limit)
        res.status(200).json({ status: 200, games })
    } catch (e) {
        res.status(500).json({ status: 500, error: e.message })
    }
})

//Add Puzzle

puzzlesRouter.post("/addPuzzle", async (req, res) => {
    try {
        const { game } = req.body;

        let gameValue = new Game({
            _id: game._id,
            size: game.size,
            type: game.type,
            numberOfLives: game.numberOfLives,
            solvedTable: game.solvedTable,
            makerName: game.makerName
        })

        await gameValue.save();
        res.status(201).json({ status: 201 });
    } catch (e) {
        res.status(500).json({ status: 500, error: e.message });
    }
})

puzzlesRouter.get("/puzzleSize", async (req, res) => {
    try {
        const size = await Game.count()
        res.status(200).json({ status: 200, size })
    } catch (e) {
        res.status(500).json({ status: 500, error: e.message, size: 0 })
    }
})

module.exports = puzzlesRouter;