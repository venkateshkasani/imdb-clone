const mongoose = require("mongoose")

const schema = mongoose.schema({
    name:String,
    gender:String,
    DOB:String,
    Bio:String
},
{
    collection:'directors'
})

const directorModel = mongoose.model("directors",schema)

export default directorModel;