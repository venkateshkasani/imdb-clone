const mongoose = require('mongoose')

const schema = mongoose.schema({
    movieName:String,
    director:String,
    Actors:[String],
    Producer:String,
    imdbRating:String,
    yearOfRelease:String,
    plot:String,
    poster:String,
},
{
    collection:"asfadsf"
})

const movieModel = mongoose.model('movies',schema)

export default movieModel;