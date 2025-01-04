const express = require('express')
const router = express.Router();
const directors = require('../models/directors')
const directorData = require('../datasets/directors')

router.get('/directors', async (req,res) => {
     try {
        const data = directors.find()
        res.json(data).status(200)
     } catch (e) {
        throw new Error('Failed to fetch resources from db')
     }
  })

router.post('/post-directors', async (req,res) => {
    try {
        await directors.insertMany(directorData)
        res.json({"message":"Successfully inserted"})
    } catch (e) {
        throw new Error("Failed to fetch resources from db")
    }
})

router.get("/ds",async (req,res) => {
    try {
      res.json({"mess":"yes"})
    } catch {
      res.json({"message":"error got"})
    }
})

module.exports = router;