import { FETCH_POST, FETCH_A_POST, DELETE_POST } from '../actions/'

const INITIAL_STATE = { all: [], post: null };

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {

    case FETCH_POST:
      return { ...state, all : action.payload.data };

    case FETCH_A_POST:
        return { ...state, post : action.payload.data };

    case DELETE_POST:
        return { ...state, post : '' };

    default:
      return state;
  }
}
