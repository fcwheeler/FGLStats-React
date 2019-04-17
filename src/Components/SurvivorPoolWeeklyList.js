import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Done from "@material-ui/icons/Done";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import weeklypicksReducer from "../reducers/weeklypicksReducer";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class SurvivorPoolWeeklyList extends Component {
  getAliveTeams() {
    let teamsalive = this.props.weeklypicks.teams.filter(team => {
      return (
        team.weeksummary.filter(week => {
          return week.weekearnings === 0;
        }).length === 0
      );
    });
  }

  getOut() { 

    let teamsOut = this.props.weeklypicks.teams.filter(team => {
      return (
        team.weeksummary.filter(week => {
          return week.weekearnings === 0 && week.weeknum <= weeknum;
        }).length !== 0
      );
    });

return teamsOut;
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
            <h2>Survivor Pool</h2>
          </Grid>

          {this.props.weeklypicks.teams ? (
            <>
              <Grid item>
                <Select onChange={this.handleChange} value="Current Week">
                  <MenuItem value="Current">
                    <em>Current Week</em>
                  </MenuItem>
                  <MenuItem value={1}>Week 1</MenuItem>
                  <MenuItem value={2}>Week 2</MenuItem>
                  <MenuItem value={3}>Week 3</MenuItem>
                </Select>
              </Grid>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.weeklypicks.teams ? (
              
                  getAliveTeams().map((teamobj, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{team.formattedteamname}</TableCell>
                        <TableCell>{team.owner}</TableCell>
                        <TableCell>In</TableCell>
                      </TableRow>
                    )}
                  ))
                  (this.props.weeklypicks.teams ? (
                    getOut.map((team, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{team.formattedteamname}</TableCell>
                        <TableCell>{team.owner}</TableCell>
                        <TableCell>In</TableCell>
                      </TableRow>
                    );
                  })
                  ))

                : (
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
  connect(mapStateToProps)(SurvivorPoolWeeklyList)
);
