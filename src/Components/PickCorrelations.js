import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import PickComboList from "./pickComboList";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    maxWidth: "90%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

function PickCorrelations(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(null);
  const [pickSummary, setpickSummary] = useState(null);

  function rowClick(e) {
    console.log(e.currentTarget.dataset.index);
    setselectedIndex(e.currentTarget.dataset.index);
    setModalOpen(true);
  }

  function getModalStyle() {
    const top = 0;
    const left = 0;

    return {
      margin: "auto",
      transform: `translate(-${top}%, -${left}%)`,
      alignItems: "center",
      justifyContent: "center"
    };
  }

  function getheatmap() {
    let data = [];
    let teams = props.weeklypicks.teams;
    data = props.weeklypicks.teams
      .map((team, index) => {
        // for each team

        return teams.slice(index).map((otherteam, otherteamindex) => {
          const matchlist = team.picks.map((pick, pickindex) => {
            // for each pick by that team

            // for each pick in the same week by every other team
            return {
              week: pick.week,
              tournament: pick.tournament,
              player: pick.player,
              match:
                pick.player === otherteam.picks[pickindex].player &&
                !pick.player.includes("No golfer")
            };
          });

          const matchcount = matchlist.reduce((acc, curr) => {
            return curr.match ? acc + 1 : acc;
          }, 0);

          return {
            team: team.formattedteamname,
            teamIndex: index,
            otherteam: otherteam.formattedteamname,
            otherteamIndex: index + otherteamindex,
            matches: matchcount,
            matchlist: matchlist
          };
        });
      })
      .flat()
      .filter(item => item.otherteamIndex !== item.teamIndex)
      .sort((a, b) => b.matches - a.matches)
      .slice(0, 20);
    //setpickSummary(data);
    console.log(data);
    return data;
  }

  const { classes } = props;

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} lg={4} xl={4}>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex"
            }}
          >
            <Paper className={classes.paper} style={getModalStyle()}>
              <div>
                {selectedIndex ? (
                  <>
                    <Grid
                      justify="space-between" // Add it here :)
                      container
                      spacing={24}
                    >
                      <Grid item />
                      <Grid item>
                        <IconButton
                          edge="end"
                          onClick={() => setModalOpen(false)}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Grid>
                    </Grid>

                    <Typography variant="h6" id="modal-title">
                      Tournament List
                    </Typography>

                    <PickComboList picks={pickSummary[selectedIndex]} />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </Paper>
          </Modal>
        </Grid>
      </Grid>{" "}
      <>
        <Typography variant="h5" component="h3" className={classes.control}>
          Most Common Team Picks
        </Typography>
        <Typography className={classes.control}>
          List of the teams pairs that picked the same golfer the most
          frequently.
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Teams</TableCell>
              <TableCell>Common Picks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.weeklypicks.teams && pickSummary ? (
              pickSummary.map((item, index) => {
                return (
                  <TableRow key={index} data-index={index} onClick={rowClick}>
                    <TableCell>
                      {item.team}
                      <br />
                      {item.otherteam}
                    </TableCell>
                    <TableCell>{item.matches}</TableCell>
                  </TableRow>
                );
              })
            ) : props.weeklypicks.teams && setpickSummary(getheatmap()) ? (
              <TableRow>
                <TableCell />
                <TableCell />
              </TableRow>
            ) : (
              <TableRow>
                <TableCell />
                <TableCell />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </>
    </div>
  );
}
const mapStateToProps = state => ({
  ...state
});

export default withStyles(styles)(connect(mapStateToProps)(PickCorrelations));
