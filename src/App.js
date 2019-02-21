import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dashboard from "./views/Dashboard"
import Leaderboard from "./views/Leaderboard"
import MenuAppBar from "./MenuAppBar";
import Paper from '@material-ui/core/Paper';
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
    const { classes } = this.props;
    
    return (
      <div className="App"> 
      <BrowserRouter>
      <div>
      <MenuAppBar title="FGL Stats"></MenuAppBar>

      <Route exact path="/" render={() => <Dashboard></Dashboard> }></Route>
      <Route exact path="/Leaderboard" render={() => <Leaderboard></Leaderboard> }></Route>

      </div>
      </BrowserRouter>  
      </div>
    );
  }



}


export default withStyles(styles)(App)
