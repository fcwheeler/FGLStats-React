import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TeamReportChart from "../Components/TeamReportChart";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PlaceGauge from "../Components/PlaceGauge"
import WeekHistoryChart from "../Components/WeekHistoryChart"
import WeeklyPicksTable from "../Components/WeeklyPicksTable"
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  root: {
    flexGrow: 1,

  }, 


});
class TeamReport extends Component {

    constructor(props) {
        super(props);
        this.state = {teams:null, teamid: this.props.teamid|| null, team: null};
      }  


async componentDidMount()
  {
  
   var response = await fetch('http://localhost:3001/leaderboarddata')  
   const json = await response.json();
   console.log(json);

   if(this.state.teamid)
   {
   var teamid = this.state.teamid;
    var team = json.find(function(element) {
        return element.id.toString() === teamid
      })
    
    this.setState({teams: json ,team:team})    
    }
    else{

        this.setState({teams: json})    
    }
  }

  handleTeamChange = (e) => {

    console.log(e.target)
   var team = this.state.teams.find(element => {
        return element.id === e.target.key
      })

      console.log(this.state.team)
      this.setState({team:team})  
      console.log(this.state.team)

  }

  render() {
    const { classes } = this.props;    
    return (
      <div>
      <h1>Team Report</h1>
    
         
      {this.state.team ?
      <>
      <Grid container  direction="row"  justify="center"  alignItems="center" className={classes.root} spacing={16}>
      <Grid item lg >
      <h2>{this.state.team.name}</h2>
      </Grid> 
      <Grid container  direction="row"  justify="center"  alignItems="center" className={classes.root} spacing={16}>
      <Grid item xs={3} >
      <Paper className={classes.root}  elevation={1}>

      <PlaceGauge value={[80]}></PlaceGauge>
      </Paper>
      </Grid>
      <Grid item xs={6} >
      <Paper className={classes.root}  elevation={1}>
      <WeekHistoryChart></WeekHistoryChart>
      </Paper>
      </Grid> 
      <Grid item xs={6} >
      <Paper className={classes.root}  elevation={1}>
      <WeeklyPicksTable></WeeklyPicksTable>
      </Paper>
      </Grid> 
      </Grid> 
      </Grid> 
      </>
      :
      <Grid container  direction="row"  justify="center"  alignItems="center" className={classes.root} spacing={16}>
      <Grid item xs={3} >
      <Paper className={classes.root}  elevation={1}>
      <InputLabel htmlFor="team-select">
        Select a Team
          </InputLabel>
      <Select
            onChange={this.handleTeamChange}
            id="team-select"
          >
          { this.state.teams ? 
            this.state.teams.map( item => (
                <MenuItem key={item.id} >{item.name}</MenuItem>

            )
            ):
            <></>


          }
                 </Select>
      </Paper>
      </Grid>
      </Grid>
      
      }

      </div>
          
    );
  }


}

export default withStyles(styles)(TeamReport)