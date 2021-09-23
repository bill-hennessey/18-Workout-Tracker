const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const PORT = process.env.PORT || 3001;

const db = require("./models");
const Workout = require("./models/Workout");
const Exercise = require("./models/Exercise");
const Cardio = require("./models/Cardio");
const Resistence = require("./models/Resistence");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
