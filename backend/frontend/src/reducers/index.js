import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { fetchMovies } from './fetchMovies';
import { fetchGenres } from './fetchGenres';
import { fetchMovieDetails } from './fetchMovieDetails';
import { fetchProfile } from './fetchProfile';
import { getRating } from './getRating';

export default combineReducers({
  auth: authReducer,
  movies: fetchMovies,
  genres: fetchGenres,
  profile: fetchProfile,
  details: fetchMovieDetails,
  moviesUser: getRating,
});
