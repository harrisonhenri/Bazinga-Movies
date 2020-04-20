import axios from 'axios';
import {
  FETCH_USER,
  FETCH_MOVIES,
  FETCH_MOVIESGENRES,
  FETCH_MOVIESDETAILS,
  POST_RATING,
  GET_RATING,
  FETCH_PROFILE,
} from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchMovies = (query) => async (dispatch) => {
  const res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
    params: {
      query,
      api_key: process.env.REACT_APP_TMDB_KEY,
      language: 'pt-BR',
    },
  });
  dispatch({ type: FETCH_MOVIES, payload: res.data });
};

export const fetchGenres = () => async (dispatch) => {
  const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
    params: {
      api_key: process.env.REACT_APP_TMDB_KEY,
      language: 'pt-BR',
    },
  });

  dispatch({ type: FETCH_MOVIESGENRES, payload: res.data });
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: process.env.REACT_APP_TMDB_KEY,
      language: 'pt-BR',
      append_to_response: 'videos',
    },
  });

  dispatch({ type: FETCH_MOVIESDETAILS, payload: res.data });
};

export const submitRating = (values) => async (dispatch) => {
  const res = await axios.post('/api/rating', values);
  dispatch({ type: POST_RATING, payload: res.data });
};

export const getRating = () => async (dispatch) => {
  const res = await axios.get('/api/rating');
  dispatch({ type: GET_RATING, payload: res.data });
};

export const fetchProfile = () => async (dispatch) => {
  const profile = await axios.get('/api/profile');

  const res = await Promise.all(
    profile.data.map(async (id) => {
      const movie = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
            language: 'pt-BR',
          },
        }
      );
      const movieData = movie.data;
      return movieData;
    })
  );
  dispatch({ type: FETCH_PROFILE, payload: res });
};
