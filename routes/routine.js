const express = require("express")
const router = express.Router();
const routineArray = require('../data/routine')

router.get('/all', (req, res) => {
    res.json(routineArray)
})

module.exports = router