import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 300,
  },
  control:{
    padding: theme.spacing.unit * 2,

  }

  
});

class  LeaderBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {Teams: []};
  }  



  render() {

    const { classes } = this.props;


    return (
      <Paper className={classes.root}  elevation={1}>
      <Typography variant="h5" component="h3" className={classes.control} > {this.props.title} </Typography> 

        </Paper>
    );
  }



}

export default withStyles(styles)(LeaderBoard)
