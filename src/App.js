import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Leaderboard from "./Dashboard/Leaderboard";
import Chart from "./Dashboard/Chart";
import MenuAppBar from "./MenuAppBar";
import {Grid, Paper} from '@material-ui/core';
import './App.css';

import {getLeaderboard} from "./Controllers/FGLController"

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

    var leaderboard = getLeaderboard(5);



    const { classes } = this.props;
    return (
      <div className="App">   
      <MenuAppBar title="FGL Stats"></MenuAppBar>
      <Paper className={classes.paper}>
      <Grid container  direction="row"  justify="center"  alignItems="center" className={classes.root} spacing={16}>
      <Grid item sm ><Chart></Chart></Grid>
 
      </Grid>
      <Grid container  direction="row"  justify="center"  alignItems="center" className={classes.root} spacing={16}>
      <Grid item ><Leaderboard></Leaderboard></Grid>  
      </Grid>
      </Paper>
      </div>
    );
  }



}

export default withStyles(styles)(App)
