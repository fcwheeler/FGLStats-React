import { FETCH_LEADERBOARD } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LEADERBOARD:
      return {
        ...state,
        teams: action.payload
      };
    default:
      return state;
  }
};
