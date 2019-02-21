import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const fetch = require('node-fetch');

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
    overflowX: 'auto',
  },
   textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  control:{
    padding: theme.spacing.unit * 2,

  },
  table: {
    minWidth: 700,
  },

  
});

let teaminfo = [
    {id:1,week:1,tournament:"Waste Management", golfer: "Tiger Woods", earnings: "155,254"},
    {id:2,week:2,tournament:"Waste Management", golfer: "Tiger Woods", earnings: "155,254"},
    {id:3,week:3,tournament:"Waste Management", golfer: "Tiger Woods", earnings: "155,254"}

]


class  WeeklyPicksTable extends Component {

  constructor(props) {
    super(props);
    this.state = {weeks: teaminfo  };
  }  


  


  render() {

    const { classes } = this.props;  

    return (
      <>
      <Typography variant="h5" component="h3" className={classes.control} > Weekly Picks</Typography> 
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Week</TableCell>
            <TableCell align="left">Tournament</TableCell>
            <TableCell align="left">Golfer</TableCell>
            <TableCell align="center">Earnings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.weeks ? this.state.weeks.map(row => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.week}</TableCell>
              <TableCell align="left">{row.tournament}</TableCell>
              <TableCell align="left">{row.golfer}</TableCell>
              <TableCell align="center">{row.earnings}</TableCell>

            </TableRow>
          )): <TableRow>
              
            </TableRow>}
        </TableBody>
      </Table>
  </>
    );
  }



}

export default withStyles(styles)(WeeklyPicksTable)
