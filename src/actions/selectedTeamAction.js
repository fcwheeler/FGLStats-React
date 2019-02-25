import { SELECT_TEAM } from "./types";

export const selectTeam = team => dispatch => {
  dispatch({
    type: SELECT_TEAM,
    payload: team
  });
};
