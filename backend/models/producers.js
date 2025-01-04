const mongoose = require("mongoose")

const schema = mongoose.schema({
    name:String,
    gender:String,
    DOB:String,
    Bio:String
},
{
    collection:'producers'
})

const producerModel = mongoose.model("producers",schema)

export default producerModel;