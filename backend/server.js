const express = require('express');
const mongoose = require('mongoose')

const app = express();

const port = 8000;
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
app.listen(port,() => {
    console.log("app running on port", port)
})
console.log("Connected to mongo")