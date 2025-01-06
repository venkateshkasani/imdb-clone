const express = require('express')
const router = express.Router();
const movieModel = require('../models/movies')
const multer = require('multer')
const upload = multer();

router.post('/movies', upload.single('poster'), async (req, res) => {
    const { movieName, director, actors, producer, imdbRating, yearOfRelease, plot } = req.body;
    
    const movie = {
        movieName,
        director,
        actors,
        producer,
        imdbRating,
        yearOfRelease,
        plot,
        poster: req.file.buffer 
    };

    try {
        await movieModel.insertOne(movie)
        res.status(201).send(movie);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router