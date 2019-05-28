import React from "react";
import { withStyles } from "@material-ui/core/styles";
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
  control: {
    padding: theme.spacing.unit * 2
  }
});

function UnusedTopList(props) {
  const { classes } = props;

  function getPlayers() {
    const topx = 10;
    const teamPicksList = props.weeklypicks.teams.filter(team => {
      return team.owner === props.selectedteam.selectedteam.owner;
    })[0].picks;
    console.log(teamPicksList);

    const ranklist = props.ranks.ranks.filter(player => {
      return (
        teamPicksList.filter(pick => {
          return pick.player.toLowerCase() === player.name.toLowerCase();
        }).length === 0
      );
    });

    return ranklist.slice(0, topx);
  }

  return (
    <div>
      <Typography variant="h5" component="h3" className={classes.control}>
        Top 10 Unused Picks
      </Typography>
      <Typography className={classes.control}>
        List of the top players not yet chosen by this team.
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Top 10 Finishes</TableCell>
            <TableCell>YTD Earnings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.weeklypicks.teams &&
          props.selectedteam.selectedteam &&
          props.ranks.ranks ? (
            getPlayers().map((player, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>{player.top10s}</TableCell>
                  <TableCell>
                    {player.ytd
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell />
              <TableCell />
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

export default withStyles(styles)(connect(mapStateToProps)(UnusedTopList));
