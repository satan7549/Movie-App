import {
  ADD_MOVIE,
  ERROR_SUCESS,
  GET_MOVIE,
  GET_SINGLE_MOVIE,
  LOADING_SUCESS,
  REMOVE_MOVIE,
  UPDATE_MOVIE,
} from "./actionType";
import {
  addMovieToLibraryAPI,
  deleteMovieAPI,
  getAllMoviesAPI,
  getSingleMoviesAPI,
  updateMovieAPI,
} from "./fetchAPI";

//action for add movies
export const addMovie = (item) => async (dispatch) => {
  dispatch({ type: LOADING_SUCESS });
  try {
    let data = await addMovieToLibraryAPI(item);
    dispatch({ type: ADD_MOVIE, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_SUCESS });
  }
};

//action for get All movies
export const getAllMovies = (query, sort, page) => async (dispatch) => {
  
  dispatch({ type: LOADING_SUCESS });
  try {
    let data = await getAllMoviesAPI(
      `q=${query}&sort=${sort}&page=${page}&limit=4`
    );
    dispatch({
      type: GET_MOVIE,
      payload: { data: data.movies, totalMovie: data.movieCount },
    });
  } catch (error) {
    dispatch({ type: ERROR_SUCESS });
  }
};

//action for get single movies detail
export const getSingleMovies = (id) => async (dispatch) => {
  dispatch({ type: LOADING_SUCESS });
  try {
    let data = await getSingleMoviesAPI(id);
    dispatch({
      type: GET_SINGLE_MOVIE,
      payload: { data: data.movies },
    });
  } catch (error) {
    dispatch({ type: ERROR_SUCESS });
  }
};

//action for update Movie
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

//action for Movie Delete
export const deleteMovie = (id) => async (dispatch) => {
  dispatch({ type: LOADING_SUCESS });
  try {
    await deleteMovieAPI(id);
    dispatch({ type: REMOVE_MOVIE, payload: id });
  } catch (error) {
    dispatch({ type: ERROR_SUCESS });
  }
};
