const express = require("express");
const {
  getAllMovies,
  singleMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../Controller/movie.controller");

const movieRoute = express.Router();

movieRoute.get("/", getAllMovies);
movieRoute.get("/:id", singleMovie);
movieRoute.post("/create", createMovie);
movieRoute.put("/update/:id", updateMovie);
movieRoute.delete("/delete/:id", deleteMovie);

module.exports = movieRoute;
