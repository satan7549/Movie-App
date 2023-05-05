import axios from "axios";

const baseURL = "http://localhost:8080/api/movies";

//function for get All the Movies
export const getAllMoviesAPI = async () => {
  let res = await axios.get(baseURL);
  return res.data;
};

//function for Add New movie to Library
export const addMovieToLibrary = async (items) => {
  let res = await axios.post(baseURL, { ...items });
  console.log("add item addcart API", res.data);
  return res.data;
};

//function for Update movie
export const updateMovieAPI = async (movieId, newData) => {
  let res = await axios.patch(`${baseURL}/${movieId}`, {
    ...newData,
  });
  return res.data;
};

//function for delete movie
export const deleteMovieAPI = async (id) => {
  let res = await axios.delete(`${baseURL}/${id}`);
  return res.data;
};
