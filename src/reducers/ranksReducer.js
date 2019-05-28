import { FETCH_RANKS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RANKS:
      return {
        ...state,
        ranks: action.payload
      };
    default:
      return state;
  }
};
