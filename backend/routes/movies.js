const express = require('express')
const router = express.Router();
const movieModel = require('../models/movies')

// get movies

router.get('/movies',async (req,res) => {
    try {
        const data = await movieModel.find();
        res.json(data).status(200);
    } catch (e) {
        res.status(400)
        console.log("failed to fetch resources from db")
    }
})

// search movies

router.post('/search-movies',async (req,res) => {
    try {
        const {movieName} = req.body;
    const searchInput = {}
    if(movieName) {
        searchInput.movieName = {
            $regex:movieName, $options:'i'
        }
    }
    const searchResults = await movieModel.find(searchInput);
    res.json(searchResults).status(200)
    } catch (e) {
        console.error("Error while searching in movie collection",e);
    }
})

// edit movie

router.put('/movies',async (req,res) => {
     try {
        const id = req.body.id;
        await movieModel.findByIdAndUpdate(id,req.body);
     } catch (e) {
         throw new Error("Failed to edit resources in server")
     }
})

// create movies

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