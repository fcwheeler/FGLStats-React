import initialState from "./initialState";
import { TOGGLE_DRAWER } from "../actions/types";

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      console.log(state.drawer);
      return {
        ...state,
        drawer: !state.drawer
      };
    default:
      return state;
  }
};
