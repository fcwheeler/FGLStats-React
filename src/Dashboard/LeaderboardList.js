import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { getleaderboard } from "./FGLController.js"


const fetch = require('node-fetch');

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
    overflowX: 'auto',
  },
  control:{
    padding: theme.spacing.unit * 2,

  },
  table: {
    minWidth: 700,
  },

  
});

let teaminfo = [{id:1,name:"Test1",YTDearning:2000 },{id:2,name:"Test2",YTDearning:1000 }]


class  LeaderBoardList extends Component {

  constructor(props) {
    super(props);
    this.state = {teams: null};
  }  
  async componentDidMount()
  {
  
   var response = await fetch('http://localhost:3001/leaderboarddata')
  
   const json = await response.json();
  console.log(json)
    this.setState({ teams: json })    
     
  
 

  }


  render() {

    const { classes } = this.props;  

    return (
      <>
      <Typography variant="h5" component="h3" className={classes.control} > Leaderboard</Typography> 
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell align="right">YTD Earnings</TableCell>
 
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.teams ? this.state.teams.map(row => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.YTDearnings}</TableCell>

            </TableRow>
          )): <TableRow>
              
            </TableRow>}
        </TableBody>
      </Table>
  </>
    );
  }



}

export default withStyles(styles)(LeaderBoardList)
