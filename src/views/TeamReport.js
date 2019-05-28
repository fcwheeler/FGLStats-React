import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PlaceGauge from "../Components/PlaceGauge";
import WeekHistoryChart from "../Components/WeekHistoryChart";
import WeeklyPicksTable from "../Components/WeeklyPicksTable";
import PickBreakdownChart from "../Components/PickBreakdownChart";
import UnusedTopList from "../Components/UnusedTopList";
import Button from "@material-ui/core/Button";
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
    maxWidth: "90%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  },
  itemgrid: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {}
  }
});

function getModalStyle() {
  const top = 0;
  const left = 0;

  return {
    margin: "auto",
    transform: `translate(-${top}%, -${left}%)`,
    alignItems: "center",
    justifyContent: "center"
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
              direction={"column"}
              justify="center"
              alignItems="center"
              className={classes.root}
            >
              <Grid item xs={12}>
                <h2>{this.props.selectedteam.selectedteam.name}</h2>
              </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
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
              className={classes.itemgrid}
              spacing={16}
            >
              <Grid item xs={12} md={3} lg={3} xl={3}>
                <Paper className={classes.root} elevation={1}>
                  <PlaceGauge />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6}>
                <Paper className={classes.root} elevation={1}>
                  <WeekHistoryChart />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={8} xl={8}>
                <Paper className={classes.root} elevation={1}>
                  <WeeklyPicksTable />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={8} xl={8}>
                <Paper className={classes.root} elevation={1}>
                  <PickBreakdownChart />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={8} xl={8}>
                <Paper className={classes.root} elevation={1}>
                  <UnusedTopList />
                </Paper>
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} lg={4} xl={4}>
              <Modal
                open={true}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex"
                }}
              >
                <Paper className={classes.paper} style={getModalStyle()}>
                  <Typography variant="h6" id="modal-title">
                    Select a Team
                  </Typography>
                  <SelectTeam defaultText="Loading Teams" />
                </Paper>
              </Modal>
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
  selectTeam: team => dispatch(selectTeam(team))
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamReport)
);
