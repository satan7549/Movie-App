const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter movie title"],
    trim: true,
  },
  director: {
    type: String,
    required: [true, "please enter movie director"],
    trim: true,
  },
  year: {
    type: Number,
    require: [true, "please enter release year"],
    maxLength: [4, "year can't exceed 4 characters"],
  },
  ratings: {
    type: Number,
    default: 1,
  },
  image: [
    {
      url: { type: String, required: true },
    },
  ],
  genre: {
    type: String,
    require: [true, "please enter movie genre"],
  },
  cast: {
    type: String,
    require: [true, "please enter movie cast"],
  },
  synopsis: {
    type: String,
    required: [true, "please enter movie synopsis"],
  },
  createAt: { type: Date, default: Date.now },
});

const movieModel = mongoose.model("movie", movieSchema);

module.exports = movieModel;
