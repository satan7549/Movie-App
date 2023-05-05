import {
  ADD_MOVIE,
  ERROR_SUCESS,
  GET_MOVIE,
  LOADING_SUCESS,
  REMOVE_MOVIE,
  UPDATE_MOVIE,
} from "./actionType";
import {
  addMovieToLibrary,
  deleteMovieAPI,
  getAllMoviesAPI,
  updateMovieAPI,
} from "./fetchAPI";

export const addMovie = (item) => async (dispatch) => {
  dispatch({ type: LOADING_SUCESS });
  try {
    let data = await addMovieToLibrary(item);
    dispatch({ type: ADD_MOVIE, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_SUCESS });
  }
};

export const getAllMovies = () => async (dispatch) => {
  dispatch({ type: LOADING_SUCESS });
  try {
    let data = await getAllMoviesAPI();
    dispatch({ type: GET_MOVIE, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_SUCESS });
  }
};

//update Movie
export const updateMovie = (id, newData) => async (dispatch) => {
  // console.log(id, newData);
  dispatch({ type: LOADING_SUCESS });
  try {
    let data = await updateMovieAPI(id, newData);
    // console.log("data in action", data);
    dispatch({ type: UPDATE_MOVIE, payload: { id, data } });
  } catch (error) {
    dispatch({ type: ERROR_SUCESS });
  }
};

//Movie Delete
export const deleteMovie = (id) => async (dispatch) => {
  dispatch({ type: LOADING_SUCESS });
  try {
    let data = await deleteMovieAPI(id);
    dispatch({ type: REMOVE_MOVIE, payload: id });
  } catch (error) {
    dispatch({ type: ERROR_SUCESS });
  }
};
