const express = require('express')
const router = express.Router();
const directors = require('../models/directors')
const directorData = require('../datasets/directors')

router.get('/directors', async (req,res) => {
     try {
        const data = await directors.find()
        res.json(data).status(200)
     } catch (e) {
        console.log('Failed to fetch resources from db',e)
     }
  })

router.post('/directors', async (req,res) => {
    try {
      const post = new directors(req.body)
        await post.save();
        res.json({"message":"Successfully inserted"})
    } catch (e) {
        console.log("Failed to push data to db",e)
    }
})

module.exports = router;