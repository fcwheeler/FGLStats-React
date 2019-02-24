import { FETCH_LEADERBOARD } from "./types";

export const fetchLeaderboard = () => dispatch => {
  fetch(
    "https://2hjnelw9s4.execute-api.us-east-1.amazonaws.com/Prod/fglstats",
    {
      method: "GET",
      mode: "cors"
    }
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_LEADERBOARD,
        payload: data
      })
    );
};
