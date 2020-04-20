import { FETCH_MOVIESGENRES } from "../actions/types";

export function fetchGenres(state = {}, action) {
    switch (action.type) {
        case FETCH_MOVIESGENRES:
            return action.payload;
        default:
            return state;
    }
}
