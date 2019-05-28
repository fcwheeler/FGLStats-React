import { FETCH_RANKS } from "./types";

export const fetchRanks = () => dispatch => {
  fetch(
    "https://z7dd37o0sg.execute-api.us-east-1.amazonaws.com/default/FGLStats_Ranks",
    {
      method: "GET",
      mode: "cors"
    }
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_RANKS,
        payload: data
      })
    );
};
