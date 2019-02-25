import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { MenuItem, Link } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import { LoadingOverlay, Loader } from "react-overlay-loader";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import compose from "recompose/compose";

import { selectTeam } from "../actions/selectedTeamAction";

import "react-overlay-loader/styles.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});
class SelectTeam extends Component {
  handleTeamChange = e => {
    var team = this.props.leaderboard.teams.find(element => {
      return element.name === e.target.value;
    });
    this.props.selectTeam(team);
    console.log("time to redirect");
    this.props.history.push("/TeamReport");
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={16}
        >
          <Grid item xs={3}>
            <Paper className={classes.root} elevation={1}>
              <InputLabel htmlFor="team-select">Select a Team</InputLabel>
              <Select
                value="Select"
                onChange={this.handleTeamChange}
                id="team-select"
              >
                {this.props.leaderboard.teams ? (
                  this.props.leaderboard.teams
                    .slice()
                    .sort((a, b) => {
                      if (a.name < b.name) {
                        return -1;
                      }
                      if (a.name > b.name) {
                        return 1;
                      }
                      return 0;
                    })
                    .map(item => (
                      <MenuItem value={item.name} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))
                ) : (
                  <Loader fullPage loading />
                )}
              </Select>
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

const mapDispatchToProps = dispatch => ({
  selectTeam: team => dispatch(selectTeam(team))
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(withRouter(SelectTeam));
