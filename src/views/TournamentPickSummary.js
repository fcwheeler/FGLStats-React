import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import TournamentPickList from "../Components/TournamentPickList";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    color: theme.palette.text.secondary
  },
  select: {
    fullWidth: true
  }
});

class TournamentPickSummary extends Component {
  constructor(props) {
    super(props);
    this.state = { initialtournament: null, tournament: null };
  }

  componentDidMount() {
    if (Object.keys(this.props.weeklypicks).length > 0) {
      this.setState({
        initialtournament: this.props.weeklypicks.teams[0].picks.length - 1
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.weeklypicks !== this.props.weeklypicks) {
      this.setState({
        initialtournament: this.props.weeklypicks.teams[0].picks.length - 1
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Tournament Pick Summary</h1>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={16}
        >
          <Grid item xs={12} xl={8}>
            <Paper className={classes.paper} elevation={1} width="75%">
              {this.props.weeklypicks.teams ? (
                <Select
                  className={classes.select}
                  value={
                    this.state.tournament
                      ? this.state.tournament
                      : this.state.initialtournament
                  }
                  onChange={event =>
                    this.setState({ tournament: event.target.value })
                  }
                >
                  <MenuItem value="">
                    <em>Select Tournament</em>
                  </MenuItem>
                  {this.props.weeklypicks.teams ? (
                    this.props.weeklypicks.teams[0].picks.map((week, index) => {
                      return (
                        <MenuItem key={index} value={index}>
                          {week.tournament}
                        </MenuItem>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </Select>
              ) : (
                <Typography>Loading Data...</Typography>
              )}
              <>
                {this.state.tournament !== null ||
                this.state.initialtournament !== null ? (
                  <TournamentPickList
                    week={
                      this.state.tournament
                        ? this.state.tournament
                        : this.state.initialtournament
                    }
                  />
                ) : (
                  <></>
                )}
              </>
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

export default withStyles(styles)(
  connect(mapStateToProps)(TournamentPickSummary)
);
