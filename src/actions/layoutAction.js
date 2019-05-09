import * as types from "./types";

export const toggleDrawer = open => dispatch => {
  dispatch({
    type: types.TOGGLE_DRAWER
  });
};
