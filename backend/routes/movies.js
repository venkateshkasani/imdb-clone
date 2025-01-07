const express = require('express')
const router = express.Router();
const movieModel = require('../models/movies')

router.get('/movies',async (req,res) => {
    try {
        const data = movieModel.find();
        res.json(data).status(200);
    } catch (e) {
        res.status(400)
        console.log("failed to fetch resources from db")
    }
})

router.put('/movies',async (req,res) => {
     try {
        const id = req.body.id;
        await movieModel.findByIdAndUpdate(id,req.body);
     } catch (e) {
         throw new Error("Failed to edit resources in server")
     }
})

router.post('/movies', async (req, res) => {
    const { movieName, director, actors, producer, imdbRating, yearOfRelease, plot, poster } = req.body;
    const movie = {
        movieName,
        director,
        actors,
        producer,
        imdbRating,
        yearOfRelease,
        plot,
        poster
    };
    try {
        await movieModel.create(movie)
        res.status(200).send(movie)
        console.log("Inserted movie successfully")
    } catch (error) {
        res.status(400).send(error)
        console.log("Error in the movie post route!!",error)
    }
});

module.exports = router