import { FETCH_PROFILE } from '../actions/types';

export function fetchProfile(state = [], action) {
  switch (action.type) {
    case FETCH_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
