import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { connect } from "react-redux";
import TrimesterList from "../Components/TrimesterList";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    color: theme.palette.text.secondary
  }
});
class Trimesters extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <h1>Trimesters</h1>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={16}
        >
          <Grid item xs={12} xl={8}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab value={0} label="Trimester 1" />
              <Tab value={1} label="Trimester 2" />
              <Tab value={2} label="Trimester 3" />
            </Tabs>
          </Grid>
          <Grid item xs={12} xl={8}>
            <Paper className={classes.paper} elevation={1}>
              <TrimesterList tri={this.state.value} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default withStyles(styles)(connect(mapStateToProps)(Trimesters));
