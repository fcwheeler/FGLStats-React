import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LeaderboardList from "../Dashboard/LeaderboardList";
import Chart from "../Dashboard/Chart";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


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
class Dashboard extends Component {


  render() {
    const { classes } = this.props;

    
    return (
      <div>
      <Grid container  direction="row"  justify="center"  alignItems="center" className={classes.root} spacing={16}>
      <Grid item sm >
      <Paper className={classes.paper}  elevation={1}>
      <Chart></Chart>
      </Paper>
      </Grid> 
      </Grid>
      <Grid container  direction="row"  justify="center"  alignItems="center" className={classes.root} spacing={16}>
      <Grid item >
      <Paper className={classes.paper}  elevation={1}>
      <LeaderboardList></LeaderboardList>
      </Paper>
      </Grid>  
      </Grid>
      </div>
    );
  }


}

export default withStyles(styles)(Dashboard)