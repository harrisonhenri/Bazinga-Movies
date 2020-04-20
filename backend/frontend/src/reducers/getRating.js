import { GET_RATING } from '../actions/types';

export function getRating(state = [], action) {
  switch (action.type) {
    case GET_RATING:
      return action.payload;
    default:
      return state;
  }
}
