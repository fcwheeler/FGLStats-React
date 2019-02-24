import { SELECT_TEAM, CLEAR_TEAM } from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_TEAM:
      return {
        ...state,
        selectedteam: action.payload
      };
    case CLEAR_TEAM:
      return {
        ...state,
        selectedteam: action.payload
      };
    default:
      return state;
  }
};
