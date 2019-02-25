import { SELECT_TEAM, CLEAR_TEAM } from "../actions/types";

const initialState = { selectedteam: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TEAM:
      console.log(action.payload);
      return {
        ...state,
        selectedteam: action.payload
      };
    case CLEAR_TEAM:
      return {
        ...state,
        selectedteam: null
      };
    default:
      return state;
  }
};
