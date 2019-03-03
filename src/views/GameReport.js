import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import GameListTable from "../Components/GameListTable";
import SurvivorList from "../Components/SurvivorList";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});
class GameReport extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>Game Report</h1>

        <Grid
          container
          direction={"column"}
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid item xs={12} md={8} lg={4} xl={4}>
            <Paper className={classes.root} elevation={1}>
              <GameListTable />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={4} xl={4}>
            <Paper className={classes.root} elevation={1}>
              <SurvivorList />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});



export default withStyles(styles)(connect(mapStateToProps)(GameReport));
