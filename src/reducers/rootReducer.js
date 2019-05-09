import { combineReducers } from "redux";
import leaderboardReducer from "./leaderboardReducer";
import weeklypicksReducer from "./weeklypicksReducer";
import selectedTeamReducer from "./selectedTeamReducer";
import layoutReducer from "./layoutReducer";

export default combineReducers({
  leaderboard: leaderboardReducer,
  weeklypicks: weeklypicksReducer,
  selectedteam: selectedTeamReducer,
  layout: layoutReducer
});
