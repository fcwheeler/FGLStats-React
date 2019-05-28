import { SELECT_TEAM } from "../actions/types";

const initialState = { selectedteam: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TEAM:
      console.log(action.payload);
      action.payload
        ? localStorage.setItem("selectedteam", action.payload.name)
        : localStorage.setItem("selectedteam", null);

      return {
        ...state,
        selectedteam: action.payload
      };

    default:
      return state;
  }
};
