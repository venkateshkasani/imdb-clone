const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:String,
    gender:String,
    DOB:String,
    Bio:String
},
{
    collection:'producers'
})

const producerModel = mongoose.model("producers",schema)

module.exports = producerModel