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
  },
  winner: {
    backgroundColor: "#4fe84f"
  }
});

class HighestFinishersList extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: null };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.weeklypicks !== this.props.weeklypicks) {
      this.getTopFinishers();
    }
  }

  getTopFinishers() {
    let teams = this.props.weeklypicks.teams;

    const weekHighestEarnings = [];

    teams.forEach(team => {
      team.weeksummary.forEach(week => {
        if (weekHighestEarnings[week.week - 1]) {
          if (
            week.weekearnings > weekHighestEarnings[week.week - 1].topEarnings
          ) {
            weekHighestEarnings[week.week - 1].topEarnings = week.weekearnings;
            weekHighestEarnings[week.week - 1].topEarnerName =
              team.formattedteamname;
          }
        } else {
          weekHighestEarnings.push({
            week: week.week,
            topEarnings: week.weekearnings,
            topEarnerName: team.formattedteamname
          });
        }
      });
    });

    teams.forEach(team => {
      team.topFinishes = team.weeksummary.reduce((acc, week) => {
        const addValue =
          week.weekearnings === weekHighestEarnings[week.week - 1].topEarnings
            ? 1
            : 0;
        return acc + addValue;
      }, 0);
    });

    teams.sort(function(a, b) {
      return b.topFinishes - a.topFinishes;
    });

    console.log(teams);

    this.setState({
      teams: teams
    });
  }

  render() {
    const { classes } = this.props;
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
            <h2>Top Finishes</h2>
          </Grid>
          <Grid item>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Team</TableCell>
                  <TableCell>Owner</TableCell>
                  <TableCell>Top Finishes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.teams ? (
                  this.state.teams.map((team, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{team.formattedteamname}</TableCell>
                        <TableCell>{team.owner}</TableCell>
                        <TableCell>{team.topFinishes}</TableCell>
                        <TableCell />
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell>Loading...</TableCell>
                  </TableRow>
                )}
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
  connect(mapStateToProps)(HighestFinishersList)
);
