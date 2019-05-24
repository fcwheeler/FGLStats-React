import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import MajorsList from "../Components/MajorsList";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});
class MajorsPool extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>Majors Pool</h1>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={16}
        >
          <Grid item xs={12} md={9}>
            <Paper className={classes.paper} elevation={1}>
              <MajorsList week={1} />
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

export default withStyles(styles)(connect(mapStateToProps)(MajorsPool));
