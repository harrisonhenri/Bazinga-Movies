import { FETCH_MOVIESDETAILS } from "../actions/types";

export function fetchMovieDetails(state = {}, action) {
    switch (action.type) {
        case FETCH_MOVIESDETAILS:
            return action.payload;
        default:
            return state;
    }
}
