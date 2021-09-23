const express = require("express");
const { Exercise } = require("../models");

const router = express.Router();
const Workout = require("../models/Workout");

// Dashboard link -- working!
router.get("/stats", (req, res) => {
  res.redirect("/stats.html");
});

// get last workout -- working!!
router.get(`/api/workouts`, (req, res) => {
  Workout.find({}).then((response) => {
    res.json(response);
  });
});

// createWorkout?
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.json(err));
});
// addExercise
router.put("/api/workouts", ({ body }, res) => {
  Exercise.updateOne(
    {},
    { sort: { date: 1 } },
    { $push: { exercises: [{ body }] } }
  )
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.json(err));
});

// getWorkoutsInRange
router.get("api/workouts/range", (req, res) => {
  Workout.find({ type: "resistence" }).then((response) => {
    res.json(response);
  });
});

module.exports = router;
