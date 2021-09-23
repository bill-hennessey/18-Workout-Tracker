const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistenceSchema = new Schema({
  type: String,
  name: String,
  weight: Number,
  sets: Number,
  reps: Number,
  duration: Number,
});

const Resistence = mongoose.model("Resistence", resistenceSchema);

module.exports = Resistence;
