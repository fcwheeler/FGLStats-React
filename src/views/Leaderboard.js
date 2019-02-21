import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LeaderboardList from "../Dashboard/LeaderboardList";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    flexGrow: 1,

  }, 


});
class Leaderboard extends Component {


  render() {
    const { classes } = this.props;    
    return (
      <div>
      <Grid container  direction="row"  justify="center"  alignItems="center" className={classes.root} spacing={16}>
      <Grid item lg >
      <Paper className={classes.root}  elevation={1}>
      <LeaderboardList></LeaderboardList>
      </Paper>
      </Grid> 
      </Grid>
     
      </div>
    );
  }


}

export default withStyles(styles)(Leaderboard)