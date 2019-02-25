import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dashboard from "./views/Dashboard";
import Leaderboard from "./views/Leaderboard";
import TeamReport from "./views/TeamReport";
import MenuAppBar from "./Components/MenuAppBar";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Highcharts from "highcharts";
import { fetchLeaderboard } from "./actions/leaderboardAction";
import { fetchWeeklyPicks } from "./actions/weeklypicksAction";

const theme = require("./Components/highchartTheme_538.json");
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 1000
  }
});
class App extends Component {
  componentWillMount() {
    Highcharts.setOptions(theme);
    this.props.fetchleaderboard();
    this.props.fetchweeklyPicks();
  }

  render() {
    return (
      <div>
        <BrowserRouter forceRefresh={true}>
          <div>
            <MenuAppBar title="FGL Stats" />

            <Route exact path="/" render={() => <Dashboard />} />
            <Route exact path="/Leaderboard" render={() => <Leaderboard />} />
            <Route exact path="/TeamReport" render={() => <TeamReport />} />
            <Route path="/TeamReport/:teamid" component={TeamReportID} />
          </div>
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
