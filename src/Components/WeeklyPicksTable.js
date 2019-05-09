import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
const fetch = require("node-fetch");

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "100%",
    overflowX: "auto"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  table: {
    minWidth: 700
  }
});

let teaminfo = [
  {
    id: 1,
    week: 1,
    tournament: "Waste Management",
    golfer: "Tiger Woods",
    earnings: "155,254"
  },
  {
    id: 2,
    week: 2,
    tournament: "Waste Management",
    golfer: "Tiger Woods",
    earnings: "155,254"
  },
  {
    id: 3,
    week: 3,
    tournament: "Waste Management",
    golfer: "Tiger Woods",
    earnings: "155,254"
  }
];

class WeeklyPicksTable extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Typography variant="h5" component="h3" className={classes.control}>
          Weekly Picks
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Week</TableCell>
              <TableCell align="left">Tournament(Winner)</TableCell>
              <TableCell align="left">Golfer</TableCell>
              <TableCell align="center">Earnings</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.weeklypicks.teams &&
            this.props.selectedteam.selectedteam ? (
              this.props.weeklypicks.teams
                .find(team => {
                  return team.formattedteamname.includes(
                    this.props.selectedteam.selectedteam.name
                  );
                })
                .picks.map(row => (
                  <TableRow key={row.week}>
                    <TableCell align="left">{row.week}</TableCell>
                    <TableCell align="left">{row.tournament}</TableCell>
                    <TableCell align="left">{row.player}</TableCell>
                    <TableCell align="center">
                      {row.earnings
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRow />
            )}
          </TableBody>
        </Table>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default withStyles(styles)(connect(mapStateToProps)(WeeklyPicksTable));
