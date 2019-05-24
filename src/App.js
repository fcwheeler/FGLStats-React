import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dashboard from "./views/Dashboard";
import Leaderboard from "./views/Leaderboard";
import TeamReport from "./views/TeamReport";
import GameReport from "./views/GameReport";
import SurvivorPool from "./views/SurvivorPool";
import Trimesters from "./views/Trimesters";
import HighestFinishers from "./views/HighestFinishers";
import MajorsPool from "./views/MajorsPool";
import TournamentPickSummary from "./views/TournamentPickSummary";
import MenuAppBar from "./Components/MenuAppBar";
import SideDrawer from "./Components/SideDrawer";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Highcharts from "highcharts";
import { fetchLeaderboard } from "./actions/leaderboardAction";
import { fetchWeeklyPicks } from "./actions/weeklypicksAction";

import Analytics from "react-router-ga";

// ReactGA.initialize('UA-139923249-1');

const charttheme = require("./Components/highchartTheme_538.json");

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto"
  }
});
class App extends Component {
  componentWillMount() {
    Highcharts.setOptions(charttheme);
    this.props.fetchleaderboard();
    this.props.fetchweeklyPicks();
  }

  render() {
    this._validAuthStates = ["signedIn"];
    return (
      <div>
        <BrowserRouter forceRefresh={false}>
          <Analytics id="UA-139923249-1" debug>
            <div>
              <MenuAppBar title="FGL Stats" />
              <SideDrawer />
              <Route exact path="/" render={() => <Leaderboard />} />
              <Route exact path="/DashBoard" render={() => <Dashboard />} />
              <Route exact path="/Leaderboard" render={() => <Leaderboard />} />
              <Route exact path="/TeamReport" render={() => <TeamReport />} />
              <Route exact path="/GameReport" render={() => <GameReport />} />
              <Route
                exact
                path="/SurvivorPool"
                render={() => <SurvivorPool />}
              />
              <Route exact path="/Trimesters" render={() => <Trimesters />} />
              <Route
                exact
                path="/HighestFinishers"
                render={() => <HighestFinishers />}
              />
              <Route exact path="/MajorsPool" render={() => <MajorsPool />} />
              <Route
                exact
                path="/TournamentPickSummary"
                render={() => <TournamentPickSummary />}
              />
            </div>
          </Analytics>
        </BrowserRouter>
      </div>
    );
  }
}

const TeamReportID = ({ match }) => (
  <div>
    <TeamReport teamid={match.params.teamid} />
  </div>
);

const mapStateToProps = state => ({
  leaderboard: state.leaderboardReducer,
  weeklypicks: state.weeklypicksReducer
});

const mapDispatchToProps = dispatch => ({
  fetchleaderboard: () => dispatch(fetchLeaderboard()),
  fetchweeklyPicks: () => dispatch(fetchWeeklyPicks())
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
