import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dashboard from "./views/Dashboard";
import Leaderboard from "./views/Leaderboard";
import TeamReport from "./views/TeamReport";
import GameReport from "./views/GameReport";

import MenuAppBar from "./Components/MenuAppBar";
import "./App.css";
import { BrowserRouter, Route ,Redirect} from "react-router-dom";
import { connect } from "react-redux";
import Highcharts from "highcharts";
import { fetchLeaderboard } from "./actions/leaderboardAction";
import { fetchWeeklyPicks } from "./actions/weeklypicksAction";
import { Auth } from "aws-amplify";
import { Authenticator } from 'aws-amplify-react';

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
    return (
      <div>
        <BrowserRouter forceRefresh={true}>
          <div>
          <MenuAppBar title="FGL Stats" />
          <Authenticator  signUpConfig={{ hiddenDefaults:['username','phone_number'],signUpFields: [{
            label:"Email",
            key:"email",
            required: true,
            displayOrder: 1,
            type: 'string',
            custom: false
          },
          {
            label:"Name",
            key:"owner_name",
            required: true,
            displayOrder: 1,
            type: 'string',
            custom: true
          },
          {
            label:"Password",
            key:"password",
            required: true,
            displayOrder: 1,
            type: 'password',
            custom: false
          }]}
            
          }>
    <Route exact path="/" render={() =>  <Dashboard /> }/>
            <Route exact path="/DashBoard" render={() => <Dashboard />} />            
            <Route exact path="/Leaderboard" render={() => <Leaderboard />} />
            <Route exact path="/TeamReport" render={() => <TeamReport />} />
            <Route exact path="/GameReport" render={() => <GameReport />} />
            </Authenticator>
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
