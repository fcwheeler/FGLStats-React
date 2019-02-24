import { SELECT_TEAM, CLEAR_TEAM } from "./types";

export const selectTeam = team => dispatch => {
  dispatch({
    type: SELECT_TEAM,
    payload: team
  });
};

export const clearTeam = team => dispatch => {
  dispatch({
    type: CLEAR_TEAM,
    payload: null
  });
};
