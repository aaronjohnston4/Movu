// ./controllers/movu-controller.js

const express = require('express')
const router = express.Router()
const {Movu} = require('../models')

///////////////////////////////
// ROUTES
////////////////////////////////

// Movu INDEX ROUTE
router.get("/", async (req, res) => {
	try {
    // get all people
    res.json(await Movu.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE CREATE ROUTE
router.post("/", async (req, res) => {
  try {
    // create new person
    res.json(await Movu.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        // send one person
        res.json(await Movu.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
});

// MOVU UPDATE ROUTE
router.put("/:id", async (req, res) => {
    try {
      // update movu by ID
      res.json(
        await Movu.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE DELETE ROUTE
  router.delete("/:id", async (req, res) => {
    try {
      // delete people by ID
      res.json(await Movu.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

module.exports = router