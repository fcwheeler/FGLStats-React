import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

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

class InputPaper extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date(), text: ""};
  }  

  changeText = (e) =>
  {  
    this.setState({
      text: e.target.value
    });

  }

  render() {

    const { classes } = this.props;


    return (
      <Paper className={classes.root}  elevation={1}>
      <Typography variant="h5" component="h3" className={classes.control} > {this.props.title} </Typography>
        <TextField id="Name" value={this.state.text}  onChange={this.changeText} className={classes.control}></TextField>
        <Typography component="p" className={classes.control}>The typed value is : {this.state.text} </Typography>
        <Divider></Divider>
        <Typography component="p" className={classes.control}>It is {this.state.date.toLocaleTimeString()}.</Typography>
  
        </Paper>
    );
  }



}

export default withStyles(styles)(InputPaper)
