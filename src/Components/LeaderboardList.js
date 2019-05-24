import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Hidden from "@material-ui/core/Hidden";
import { Redirect } from "react-router-dom";
import { LoadingOverlay, Loader } from "react-overlay-loader";

import { connect } from "react-redux";
import { fetchLeaderboard } from "../actions/leaderboardAction";
import { selectTeam } from "../actions/selectedTeamAction";

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
  table: {},
  tableWrapper: {
    overflowX: "auto"
  }
});

class LeaderBoardList extends Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);

    this.state = { redirect: false, filter: "" };
  }

  handle_Search = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  componentDidMount() {}

  handleLinkClick(e) {
    var team = this.props.leaderboard.teams.find(element => {
      return element.name === e.target.innerText;
    });
    console.log(e.target.innerText);
    this.props.selectTeam(team);
    this.setState({ redirect: true });
  }

  render() {
    const { classes } = this.props;

    if (this.state.redirect) {
    }
    return (
      <>
        {this.state.redirect ? (
          <Redirect to="/TeamReport" />
        ) : (
          <>
            <Typography variant="h5" component="h3" className={classes.control}>
              Leaderboard
            </Typography>
            <TextField
              id="search"
              type="text"
              label="Search"
              onChange={this.handle_Search}
              className={classes.textField}
            />
            <div className={classes.tableWrapper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Team</TableCell>
                    <Hidden mdDown>
                      <TableCell>Owner</TableCell>
                    </Hidden>
                    <TableCell align="right">YTD Earnings</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.leaderboard.teams &&
                  this.props.leaderboard.teams.length > 0 ? (
                    this.props.leaderboard.teams
                      .filter(team => {
                        return this.state.filter !== ""
                          ? team.name
                              .toLowerCase()
                              .includes(this.state.filter) ||
                              team.owner
                                .toLowerCase()
                                .includes(this.state.filter)
                          : true;
                      })
                      .map(row => (
                        <TableRow key={row.id}>
                          <TableCell alignLeft>
                            <Button
                              value={row.name}
                              onClick={this.handleLinkClick}
                            >
                              {row.name}
                            </Button>
                          </TableCell>
                          <Hidden mdDown>
                            <TableCell> {row.owner}</TableCell>
                          </Hidden>
                          <TableCell align="right">
                            {row.YTDearnings.toString().replace(
                              /\B(?=(\d{3})+(?!\d))/g,
                              ","
                            )}
                          </TableCell>
                        </TableRow>
                      ))
                  ) : (
                    <TableRow>
                      <TableCell>Loading...</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchleaderboard: () => dispatch(fetchLeaderboard()),
  selectTeam: team => dispatch(selectTeam(team))
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LeaderBoardList)
);
