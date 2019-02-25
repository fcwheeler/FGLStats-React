import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PlaceGauge from "../Components/PlaceGauge";
import WeekHistoryChart from "../Components/WeekHistoryChart";
import WeeklyPicksTable from "../Components/WeeklyPicksTable";
import PickBreakdownChart from "../Components/PickBreakdownChart";
import Select from "@material-ui/core/Select";
import { MenuItem, Link } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { LoadingOverlay, Loader } from "react-overlay-loader";
import { connect } from "react-redux";
import SelectTeam from "../Components/SelectTeam";
import { selectTeam } from "../actions/selectedTeamAction";
import Modal from "@material-ui/core/Modal";
import "react-overlay-loader/styles.css";
import Typography from "@material-ui/core/Typography";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
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

  handleclearteam = () => {
    this.props.selectTeam(null);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>Team Report</h1>

        {this.props.selectedteam.selectedteam ? (
          <>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.root}
              spacing={16}
            >
              <Grid item xs={12}>
                <h2>{this.props.selectedteam.selectedteam.name}</h2>
              </Grid>
              <Grid container justify="center">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleclearteam}
                >
                  Change Team
                </Button>
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
                    <PlaceGauge />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.root} elevation={1}>
                    <WeekHistoryChart />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.root} elevation={1}>
                    <WeeklyPicksTable />
                  </Paper>
                </Grid>
                <Grid item xs={8}>
                  <Paper className={classes.root} elevation={1}>
                    <PickBreakdownChart />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
          <Modal open={true}>
            <Paper className={classes.paper} style={getModalStyle()}>
              <Typography variant="h6" id="modal-title">
                Select a Team
              </Typography>
              <SelectTeam />
            </Paper>
          </Modal>
        )}
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

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamReport)
);
