import { FETCH_WEEKLYPICKS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WEEKLYPICKS:
      return {
        ...state,
        teams: action.payload
      };
    default:
      return state;
  }
};
