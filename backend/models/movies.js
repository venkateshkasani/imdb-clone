const mongoose = require('mongoose')

const schema = mongoose.Schema({
    movieName:String,
    director:String,
    actors:[String],
    producer:String,
    imdbRating:String,
    yearOfRelease:String,
    plot:String,
    poster:Buffer,
},
{
    collection:"asfadsf"
})

const movieModel = mongoose.model('movies',schema)