import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class SurvivorPoolWeeklyList extends Component {
  constructor(props) {
    super(props);
    this.state = { gameOver: false, aliveTeams: null, outTeams: null };
  }

  getAliveTeams() {
    let teamsalive = this.props.weeklypicks.teams.filter(team => {
      return (
        team.weeksummary.filter(week => {
          return week.weekearnings === 0;
        }).length === 0
      );
    });

    this.setState({ aliveTeams: teamsalive });
  }

  getOut(weeknum) {
    let teamsOut = this.props.weeklypicks.teams.filter(team => {
      return (
        team.weeksummary.filter(week => {
          return week.weekearnings === 0;
        }).length !== 0
      );
    });

    teamsOut.forEach(team => {
      team.weekoutlist = team.weeksummary.filter(week => {
        return week.weekearnings === 0;
      });
      team.weekout = team.weekoutlist[0].week;
    });

    teamsOut.sort(function(a, b) {
      return b.weekout - a.weekout;
    });

    this.setState({ outTeams: teamsOut });
  }
  render() {
    const { classes } = this.props;
    const isOver = this.state.gameOver;
    return (
      <div>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={16}
        >
          <Grid item>
            <h2>Survivor Pool</h2>
          </Grid>

          {this.props.weeklypicks.teams ? (
            <>
              <Grid item xs={12}>
                <Typography>
                  {" "}
                  {this.getAliveTeams().length} Teams Alive
                </Typography>
              </Grid>
            </>
          ) : (
            <></>
          )}
          <Grid item fullwidth>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Team</TableCell>
                  <TableCell>Owner</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Week Out</TableCell>
                  <TableCell>Tournament</TableCell>
                  <TableCell>Golfer</TableCell>
                  <TableCell>Tournament Earnings</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.aliveTeams ? (
                  this.state.aliveTeams.map((team, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{team.formattedteamname}</TableCell>
                        <TableCell>{team.owner}</TableCell>
                        <TableCell>In</TableCell>
                        <TableCell />
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell>Loading...</TableCell>
                  </TableRow>
                )}
                {this.state.outTeams
                  ? this.state.outTeams.map((team, index, array) => {
                      let isWinner = false;
                      if (isOver) {
                        if (array[0].weekout === team.weekout) {
                          isWinner = true;
                        }
                      }
                      return (
                        <TableRow key={index}>
                          <TableCell>{team.formattedteamname}</TableCell>
                          <TableCell>{team.owner}</TableCell>
                          <TableCell>{isWinner ? "Winner" : "Out"}</TableCell>
                          <TableCell>{team.weekout}</TableCell>
                          <TableCell>
                            {team.picks[team.weekout - 1].tournament}
                          </TableCell>
                          <TableCell>
                            {team.picks[team.weekout - 1].player}
                          </TableCell>
                          <TableCell>
                            {team.picks[team.weekout - 1].earnings}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  : null}
              </TableBody>
            </Table>
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
  connect(mapStateToProps)(SurvivorPoolWeeklyList)
);
