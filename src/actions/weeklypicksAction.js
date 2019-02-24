import { FETCH_WEEKLYPICKS } from "./types";

export const fetchWeeklyPicks = () => dispatch => {
  fetch(
    "https://2hjnelw9s4.execute-api.us-east-1.amazonaws.com/Prod/fglstats/weeklypicks",
    {
      method: "GET",
      mode: "cors"
    }
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_WEEKLYPICKS,
        payload: data
      })
    );
};
