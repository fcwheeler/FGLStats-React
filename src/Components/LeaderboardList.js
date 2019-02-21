import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Link} from 'react-router-dom'



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



class  LeaderBoardList extends Component {

  constructor(props) {
    super(props);
    var topx = this.props.topx? this.props.topx: null
    this.state = {teams: null, filteredTeams: null, topx: topx };
  }  
  async componentDidMount()
  {
  
   var response = await fetch('http://localhost:3001/leaderboarddata')
  
   const json = await response.json();
  console.log(json)
    if(this.state.topx)
    {
    var topx = Math.min(json.length,this.state.topx )
    this.setState({ teams: json,  filteredTeams: json, topx: topx})    
    }
    else{

      this.setState({ teams: json,  filteredTeams: json, topx: json.length })    
    }
  }

  handle_Search = e => {
    var filteredteams = this.state.teams.filter(item=> item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({ filteredTeams: filteredteams })    
    console.log(filteredteams)

  }


  render() {

    const { classes } = this.props;  

    return (
      <>
      <Typography variant="h5" component="h3" className={classes.control} > Leaderboard</Typography> 
      <TextField id="search" type="text" label="Search" onChange={this.handle_Search} className={classes.textField} />
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell align="right">YTD Earnings</TableCell>
 
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.filteredTeams ? this.state.filteredTeams.slice(0, this.state.topx-1).map(row => (
            <TableRow key={row.id}>
              <TableCell align="left"><Link to={"/TeamReport/" + row.id}>{row.name}</Link></TableCell>
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
