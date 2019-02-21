import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dashboard from "./views/Dashboard"
import Leaderboard from "./views/Leaderboard"
import TeamReport from "./views/TeamReport"
import MenuAppBar from "./MenuAppBar";
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';


const styles = theme => ({
  root: {
    flexGrow: 1,
  }, 
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 1000,
  },

});
class App extends Component {


  render() {
    
    return (
      <div> 
      <BrowserRouter>
      <div>
      <MenuAppBar title="FGL Stats"></MenuAppBar>

      <Route exact path="/" render={() => <Dashboard></Dashboard> }></Route>
      <Route exact path="/Leaderboard" render={() => <Leaderboard></Leaderboard> }></Route>
      <Route exact path="/TeamReport" render={() => <TeamReport></TeamReport> }></Route>
      <Route path="/TeamReport/:teamid" component={TeamReportID}></Route>
      </div>
      </BrowserRouter>  
      </div>
    );
  }



}

const TeamReportID = ({ match }) => (
  <div>
  <TeamReport teamid={match.params.teamid}></TeamReport>
  </div>
);
export default withStyles(styles)(App)
