import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import LeaderboardList from "../Components/LeaderboardList";
import Chart from "../Components/TeamReportChart";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


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
class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>Dashboard</h1>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={16}
        >
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper} elevation={1}>
              <Chart />
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={16}
        >
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper} elevation={1}>
              <h2>Top 10 Teams</h2>
              <LeaderboardList topx="10" />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}



export default withStyles(styles)(Dashboard);
