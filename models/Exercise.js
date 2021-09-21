const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: String,
  type: Boolean,
  weight: Number,
  sets: Number,
  reps: Number,
  duration: Number,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
