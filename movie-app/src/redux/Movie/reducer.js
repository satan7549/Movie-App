import {
  ADD_MOVIE,
  ERROR_SUCESS,
  GET_MOVIE,
  GET_SINGLE_MOVIE,
  LOADING_SUCESS,
  REMOVE_MOVIE,
  UPDATE_MOVIE,
} from "./actionType";

const initialState = {
  movies: [],
  singleMovie: {},
  loading: false,
  error: false,
  totalMovie: 0,
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_SUCESS: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ERROR_SUCESS: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ADD_MOVIE: {
      return {
        ...state,
        loading: false,
        movies: [...state.movies, payload],
      };
    }
    case GET_MOVIE: {
      return {
        ...state,
        loading: false,
        movies: payload.data,
        totalMovie: payload.totalMovie,
      };
    }
    case GET_SINGLE_MOVIE: {
      return {
        ...state,
        loading: false,
        singleMovie: payload.data,
      };
    }
  
    case UPDATE_MOVIE: {
      const newItems = state.movies.map((movie) => {
        if (movie.id === payload.id) {
          return payload.data;
        }
        return movie;
      });
      return {
        ...state,
        loading: false,
        movies: newItems,
      };
    }

    case REMOVE_MOVIE: {
      const newItems = state.movies.filter((movie) => movie.id !== payload);
      return {
        ...state,
        loading: false,
        movies: newItems,
      };
    }

    default: {
      return state;
    }
  }
};
export default movieReducer;
