import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import SurvivorPoolWeeklyList from "../Components/SurvivorPoolWeeklyList";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    color: theme.palette.text.secondary
  }
});
class SurvivorPool extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>Survivor Pool</h1>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={16}
        >
          <Grid item xs={12} md={4} lg={4} xl={4}>
            <Paper className={classes.paper} elevation={1}>
              <SurvivorPoolWeeklyList week={1} />
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

export default withStyles(styles)(connect(mapStateToProps)(SurvivorPool));
