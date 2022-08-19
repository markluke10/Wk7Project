const express = require('express')
const movieRt = express.Router()
const {Movie} = require('../models/')



movieRt.get('/', (req, res) => {
    res.send("It work's!")
})

// movieRt.post('/', [check('type').trim().not().isEmpty()], async (req, res) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.status(400).json({errors: errors.array()})
//     }
//     await Moive.create(req.body)   
//     res.sendStatus(200)
// })



module.exports = {movieRt}