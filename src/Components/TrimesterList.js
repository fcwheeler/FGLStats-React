import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Hidden from "@material-ui/core/Hidden";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  winner: {
    backgroundColor: "#4fe84f"
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

const Trimesters = [
  {
    start: 0,
    end: 9
  },
  {
    start: 10,
    end: 18
  },
  {
    start: 19,
    end: 27
  }
];

class TrimesterList extends Component {
  getTrimesterTeams() {
    const tri = Trimesters[this.props.tri];
    let teamtotals = this.props.weeklypicks.teams
      .filter(team => {
        team.tritotal = team.weeksummary
          .filter(week => {
            return week.week >= tri.start && week.week <= tri.end;
          })
          .reduce(function(total, week) {
            return total + week.weekearnings;
          }, 0);

        team.tridone =
          team.weeksummary.filter(week => {
            return week.week >= tri.start && week.week <= tri.end;
          }).length >=
          tri.end - tri.start;

        return team;
      })
      .sort(function(a, b) {
        return b.tritotal - a.tritotal;
      });

    console.log(teamtotals);

    return teamtotals;
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
            <h2>Trimester Report</h2>
          </Grid>
          <Grid item fullwidth>
            <div className={classes.tableWrapper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Team</TableCell>
                    <Hidden mdDown>
                      <TableCell>Owner</TableCell>
                    </Hidden>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.weeklypicks.teams ? (
                    this.getTrimesterTeams().map((team, index) => {
                      return (
                        <TableRow
                          key={index}
                          className={
                            team.tridone && index === 0 ? classes.winner : ""
                          }
                        >
                          <TableCell>{team.formattedteamname}</TableCell>
                          <Hidden mdDown>
                            <TableCell>{team.owner}</TableCell>
                          </Hidden>
                          <TableCell>
                            {team.tritotal
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </TableCell>
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
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default withStyles(styles)(connect(mapStateToProps)(TrimesterList));
