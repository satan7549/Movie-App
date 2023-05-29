import axios from "axios";

const baseURL = "https://movie-app-backed.onrender.com/movie";

//function for get All the Movies
export const getAllMoviesAPI = async (queryString) => {
  let res = await axios.get(`${baseURL}?${queryString}`);
  return res.data;
};

//function for get single  Movie
export const getSingleMoviesAPI = async (id) => {
  let res = await axios.get(`${baseURL}/${id}`);
  return res.data;
};

//function for Add New movie to Library
export const addMovieToLibraryAPI = async (items) => {
  let res = await axios.post(`${baseURL}/create`, { ...items });
  return res.data.movie;
};

//function for Update movie
export const updateMovieAPI = async (movieId, newData) => {
  let res = await axios.put(`${baseURL}/update/${movieId}`, {
    ...newData,
  });
  return res.data;
};

//function for delete movie
export const deleteMovieAPI = async (id) => {
  let res = await axios.delete(`${baseURL}/delete/${id}`);
  return res.data;
};
