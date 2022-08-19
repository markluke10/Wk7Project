const express = require('express')
const userRt = express.Router()
const {User} = require('../models/')



userRt.get('/', (req, res) => {
    res.send("It work's!")
})





module.exports = {userRt}