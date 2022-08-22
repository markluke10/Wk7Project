const express = require('express')
const movieRt = express.Router()
const {Movie} = require('../models/')
const {movieData} = require('../db/seedData.js')

// TEST
movieRt.get('/', (req, res) => {
    res.send("It work's!")
})

// ----------------------------------------------
// GET REQUESTS
// ----------------------------------------------

// All Movies------------------------------------
movieRt.get('/all', (req, res) => {
    res.send(movieData)
})

// One Movie by ID-------------------------------
movieRt.get('/id/:id', async (req, res) => {

    const searchedMovieById = await Movie.findOne({where: {id: req.params.id}})
        if(!searchedMovieById) {
            res.send("Movie doesn't exits")
            return
        }
        res.send(searchedMovieById)
})

// One Movie by Title-----------------------------
movieRt.get('/title/:title', async (req, res) => {

    const searchedMovieTitle = await Movie.findOne({where: {title: req.params.title}})
        if(!searchedMovieTitle) {
            res.send("Movie doesn't exits")
            return
        }
        res.send(searchedMovieTitle)
})

// One Movie by Genre-----------------------------
movieRt.get('/genre/:genre', async (req, res) => {

    const searchedMovieByGenre = await Movie.findOne({where: {genre: req.params.genre}})
        if(!searchedMovieByGenre) {
            res.send("Movie doesn't exits")
            return
        }
        res.send(searchedMovieByGenre)
})








module.exports = {movieRt}