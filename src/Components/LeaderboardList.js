import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { LoadingOverlay, Loader } from "react-overlay-loader";

import { connect } from "react-redux";
import { fetchLeaderboard } from "../actions/leaderboardAction";
import { selectTeam, clearTeam } from "../actions/selectedTeamAction";

import "react-overlay-loader/styles.css";
import { Button } from "@material-ui/core";

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

class LeaderBoardList extends Component {
  handle_Search = e => {
    var filteredteams = this.props
      .leaderboard()
      .filter(item =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    console.log(filteredteams);
  };

  componentDidMount() {}

  render() {
    const { classes } = this.props;

    return (
      <>
        <Typography variant="h5" component="h3" className={classes.control}>
          {" "}
          Leaderboard
        </Typography>
        <TextField
          id="search"
          type="text"
          label="Search"
          onChange={this.handle_Search}
          className={classes.textField}
        />
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell align="right">YTD Earnings</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.leaderboard.teams &&
            this.props.leaderboard.teams.length > 0 ? (
              this.props.leaderboard.teams.slice(0, 10 - 1).map(row => (
                <TableRow key={row.id}>
                  <TableCell align="left">
                    <Typography>
                      <Link
                        underline="none"
                        color="inherit"
                        to={"/TeamReport/" + row.id}
                      >
                        {row.name}
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell> {row.owner}</TableCell>
                  <TableCell align="right">{row.YTDearnings}</TableCell>
                </TableRow>
              ))
            ) : (
              <Loader fullpage />
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

const mapDispatchToProps = dispatch => ({
  fetchleaderboard: () => dispatch(fetchLeaderboard()),
  selectTeam: team => dispatch(selectTeam(team)),
  clearTeam: () => dispatch(clearTeam())
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LeaderBoardList)
);
