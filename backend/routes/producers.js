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

router.post('/producers',async (req,res) => {
   try {
        const doc = new producers(req.body)
        await doc.save();
        res.json({"message":"Successfully inserted"})
        console.log("inserted successfully")
   } catch (e) {
       console.error("Error while posting data",e)
   }
})

module.exports = router;

