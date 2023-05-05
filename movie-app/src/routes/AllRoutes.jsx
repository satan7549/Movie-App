import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "../Pages/Movies";
import AddMovies from "../Pages/AddMovies";
import MovieDetail from "../Pages/MovieDetail";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/addmovie" element={<AddMovies />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default AllRoutes;
