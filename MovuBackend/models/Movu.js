///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const MovuSchema = new mongoose.Schema({
  title: String,
  documentation: String,
  image: String,
},{timestamps: true});

const Movu = mongoose.model("Movu", MovuSchema);

module.exports = Movu
