import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import LeaderboardList from "../Components/LeaderboardList";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    textAlign: "center",
    alignSelf: "center"
  }
});
class Leaderboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Leaderboard</h1>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={16}
        >
          <Grid item xs={9}>
            <Paper className={classes.root} elevation={1}>
              <LeaderboardList />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Leaderboard);
