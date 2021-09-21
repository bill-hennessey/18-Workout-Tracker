const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const db = require("./models");
const Workout = require("./models/Workout");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// routes below
app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

app.post("/api/workouts", ({ body }, res) => {
  //   const Wkout = new Workout(body);
  Workout.create(body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.json(err));
});

app.post(`/api/workouts/range`, () => {});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
