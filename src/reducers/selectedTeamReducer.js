import { SELECT_TEAM } from "../actions/types";

const initialState = { selectedteam: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TEAM:
      console.log(action.payload);
      return {
        ...state,
        selectedteam: action.payload
      };

    default:
      return state;
  }
};
