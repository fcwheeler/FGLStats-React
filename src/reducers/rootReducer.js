import { combineReducers } from "redux";
import leaderboardReducer from "./leaderboardReducer";
import weeklypicksReducer from "./weeklypicksReducer";

export default combineReducers({
  leaderboard: leaderboardReducer,
  weeklypicks: weeklypicksReducer
});
