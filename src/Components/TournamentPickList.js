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
  }
});

function TournamentPickList(props) {
  const { classes } = props;

  function getPlayers() {
    const picklist = props.weeklypicks.teams.map(team => {
      return team.picks[props.week];
    });

    const uniquePicks = picklist.filter(
      (e, i) => picklist.findIndex(a => a.player === e.player) === i
    );

    let playerCountList = uniquePicks.map(pick => {
      return {
        owners: picklist.reduce((acc, curr) => {
          return curr.player === pick.player ? acc + 1 : acc;
        }, 0),
        name: pick.player,
        earnings: pick.earnings
      };
    });
    console.log(playerCountList);
    playerCountList.sort(function(a, b) {
      return b.owners - a.owners;
    });

    playerCountList = playerCountList.filter(item => {
      return item.name !== "No golfer selected";
    });

    return playerCountList;
  }

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
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Player</TableCell>
                <TableCell>Owners</TableCell>
                <TableCell>Earnings</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.weeklypicks.teams ? (
                getPlayers().map((player, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{player.name}</TableCell>
                      <TableCell>{player.owners}</TableCell>
                      <TableCell>
                        {player.earnings
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
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

export default withStyles(styles)(connect(mapStateToProps)(TournamentPickList));
