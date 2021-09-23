const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  type: String,
  name: String,
  duration: Number,
  distance: Number,
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;
