import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import HighestFinishersList from "../Components/HighestFinishersList";

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
class HighestFinishers extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>Highest Finishers Pool</h1>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={16}
        >
          <Grid item xs={12} xl={8}>
            <Paper className={classes.paper} elevation={1}>
              <HighestFinishersList week={1} />
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

export default withStyles(styles)(connect(mapStateToProps)(HighestFinishers));
