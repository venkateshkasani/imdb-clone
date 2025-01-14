const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:String,
    gender:String,
    DOB:String,
    Bio:String,
    poster:String
},
{
    collection:'directors'
})

const directorModel = mongoose.model("directors",schema)

module.exports = directorModel;