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
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "100%",
    overflowX: "auto"
  },
  winner: {
    backgroundColor: "#4fe84f"
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class MajorsList extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: null };
  }

  componentDidMount() {
    if (Object.keys(this.props.weeklypicks).length > 0) {
      this.getMajorsTotal();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.weeklypicks !== this.props.weeklypicks) {
      this.getMajorsTotal();
    }
  }

  getMajorsTotal() {
    let teams = this.props.weeklypicks.teams;

    const majorsweeks = [7, 11, 16, 20, 25];

    teams.forEach(team => {
      team.MajorsTotal = team.weeksummary.reduce((acc, week) => {
        const addValue = majorsweeks.includes(week.week)
          ? week.weekearnings
          : 0;
        return acc + addValue;
      }, 0);
    });

    teams.sort(function(a, b) {
      return b.MajorsTotal - a.MajorsTotal;
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
            <h2>Majors Pool Leaders</h2>
          </Grid>
          <Grid item>
            <div className={classes.tableWrapper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Team</TableCell>
                    <Hidden mdDown>
                      <TableCell>Owner</TableCell>
                    </Hidden>
                    <TableCell>Majors Earnings</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.teams ? (
                    this.state.teams.map((team, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{team.formattedteamname}</TableCell>
                          <Hidden mdDown>
                            <TableCell>{team.owner}</TableCell>
                          </Hidden>
                          <TableCell>
                            {team.MajorsTotal.toString().replace(
                              /\B(?=(\d{3})+(?!\d))/g,
                              ","
                            )}
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

export default withStyles(styles)(connect(mapStateToProps)(MajorsList));
