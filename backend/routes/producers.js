const express = require('express')
const router = express.Router();
const producers = require('../models/producers')
const producerData = require('../datasets/producers')

router.get('/producers',async (req,res) => {
   try {
    const data = producers.find();
    return res.json(data).status(200);
   } catch (e) {
     console.error("Error while retrieving data from db",e);
     throw new Error('Failed to fetch resources from db',e);
   }
})

router.post('/post-producers',async (req,res) => {
   try {
        const data = producerData;
        await producers.insertMany(data);
        console.log("inserted successfully")
   } catch (e) {
       console.error("Error while posting data",e)
   }
})

router.get("/dsa",async (req,res) => {
    try {
      res.json({"mess":"yes prod"})
    } catch {
      res.json({"message":"error got"})
    }
})

module.exports = router;

