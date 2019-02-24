import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PlaceGauge from "../Components/PlaceGauge";
import WeekHistoryChart from "../Components/WeekHistoryChart";
import WeeklyPicksTable from "../Components/WeeklyPicksTable";
import Select from "@material-ui/core/Select";
import { MenuItem, Link } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import { LoadingOverlay, Loader } from "react-overlay-loader";
import { connect } from "react-redux";

import { selectTeam, clearTeam } from "../actions/selectedTeamAction";

import "react-overlay-loader/styles.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});
class TeamReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    if (this.props.leaderboard.teams) {
      this.setState({ loading: false });
    }
  }

  handleTeamChange = e => {
    var team = this.props.leaderboard.teams.find(element => {
      return element.name === e.target.value;
    });

    this.props.selectTeam(team);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>Team Report</h1>

        {this.props.selectedteam ? (
          <>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.root}
              spacing={16}
            >
              <Grid item lg>
                <h2>{this.props.selectedteam.name}</h2>
                <Link to="/TeamReport">Change Team</Link>
              </Grid>

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
                    <PlaceGauge
                      rank={[this.props.selectedteam.id]}
                      players={this.props.leaderboard.teams.length}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.root} elevation={1}>
                    <WeekHistoryChart teamname={this.props.selectedteam.name} />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.root} elevation={1}>
                    <WeeklyPicksTable teamname={this.props.selectedteam.name} />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
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
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  selectTeam: team => dispatch(selectTeam(team)),
  clearTeam: () => dispatch(clearTeam())
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamReport)
);
