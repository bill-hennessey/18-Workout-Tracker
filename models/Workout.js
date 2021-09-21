const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: Date,
  totalDuration: Number,
  numExercises: Number,
  totalWeight: Number,
  totalSets: Number,
  totalReps: Number,
  totalDistance: Number,
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
