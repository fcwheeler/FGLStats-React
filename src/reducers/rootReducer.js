import { combineReducers } from "redux";
import leaderboardReducer from "./leaderboardReducer";
import weeklypicksReducer from "./weeklypicksReducer";
import selectedTeamReducer from "./selectedTeamReducer";


export default combineReducers({
  leaderboard: leaderboardReducer,
  weeklypicks: weeklypicksReducer,
  selectedteam: selectedTeamReducer
});
