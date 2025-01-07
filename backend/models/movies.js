const mongoose = require('mongoose')

const schema = mongoose.Schema({
    movieName:String,
    director:String,
    actors:[String],
    producer:String,
    imdbRating:String,
    yearOfRelease:String,
    plot:String,
    poster:String,
},
{
    collection:"movies"
})

const movieModel = mongoose.model('movies',schema)

module.exports = movieModel;