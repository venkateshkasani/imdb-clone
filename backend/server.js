const express = require('express');
const mongoose = require('mongoose')
const router = require('./routes/router')

const app = express();

const port = 8000;
app.use(express.json())
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
app.listen(port,() => {
    console.log("app running on port", port)
})
app.use('/',router)
console.log("Connected to mongo")