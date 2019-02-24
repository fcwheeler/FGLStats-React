import { combineReducers } from "redux";
import leaderboardReducer from "./leaderboardReducer";

export default combineReducers({
  leaderboard: leaderboardReducer
});
