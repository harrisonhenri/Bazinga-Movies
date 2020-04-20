import { FETCH_MOVIES } from "../actions/types";

export function fetchMovies(state = {}, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return action.payload;
        default:
            return state;
    }
}
