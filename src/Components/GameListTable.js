import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class GameListTable extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h5" component="h3" className={classes.control}>
          Games
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ minWidth: 100 }}>
                Game
              </TableCell>
              <TableCell align="center">Pot</TableCell>
              <TableCell align="center">Completed</TableCell>
              <TableCell align="center">Winner(s)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">Full Season</TableCell>
              <TableCell align="center">$0</TableCell>
              <TableCell align="center" />
              <TableCell align="center" />
            </TableRow>
            <TableRow>
              <TableCell align="left">Masters</TableCell>
              <TableCell align="center">$0</TableCell>
              <TableCell align="center" />
              <TableCell align="center" />
            </TableRow>
            <TableRow>
              <TableCell align="left">Trimester 1</TableCell>
              <TableCell align="center">$0</TableCell>
              <TableCell align="center" />
              <TableCell align="center" />
            </TableRow>
            <TableRow>
              <TableCell align="left">Trimester 2</TableCell>
              <TableCell align="center">$0</TableCell>
              <TableCell align="center" />
              <TableCell align="center" />
            </TableRow>
            <TableRow>
              <TableCell align="left">Trimester 3</TableCell>
              <TableCell align="center">$0</TableCell>
              <TableCell align="center" />
              <TableCell align="center" />
            </TableRow>
            <TableRow>
              <TableCell align="left">Skins</TableCell>
              <TableCell align="center">$0</TableCell>
              <TableCell align="center" />
              <TableCell align="center" />
            </TableRow>
            <TableRow>
              <TableCell align="left">Survivor</TableCell>
              <TableCell align="center">$0</TableCell>
              <TableCell align="center" />
              <TableCell align="center" />
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});

export default withStyles(styles)(connect(mapStateToProps)(GameListTable));
