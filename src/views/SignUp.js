import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Auth } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 4
  }
});

class SignUp extends Component {
  state = {
    password: "",
    username: "",
    authCode: ""
  };
  onChange = (key, value) => {
    this.setState({ [key]: value });
  };

  signUp = () => {
    const { username, password } = this.state;
    Auth.signUp({
      username,
      password,
      attributes: {
        email: username
      }
    })
      .then(() => console.log("successful sign up!"))
      .catch(err => console.log("error signing up: ", err));
  };
  confirmSignUp = () => {
    Auth.confirmSignUp(this.state.username, this.state.authCode)
      .then(console.log("successful confirm sign up!"))
      .catch(err => console.log("error confirming signing up: ", err));
  };
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction={"column"}
        justify="center"
        alignItems="center"
        spacing={16}
        xs={12}
        lg={12}
        xl={12}
        className={classes.root}
      >
        <Grid item className={classes.root}>
          <Paper elevation={2} className={classes.root}>
            <h2>Sign Up</h2>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction={"column"}
              spacing={16}
            >
              <Grid item fullwidth>
                <TextField
                  placeholder="Email"
                  type="email"
                  required
                  onChange={evt => this.onChange("username", evt.target.value)}
                />
              </Grid>

              <Grid item fullwidth>
                <TextField
                  placeholder="Password"
                  type="password"
                  required
                  onChange={evt => this.onChange("password", evt.target.value)}
                />
              </Grid>
              <Grid item fullwidth>
                <Button onClick={this.signUp}>Sign Up</Button>
              </Grid>
              <Grid item fullwidth>
                <TextField
                  placeholder="Authentication Code"
                  onChange={evt => this.onChange("authCode", evt.target.value)}
                />
              </Grid>
              <Grid item fullwidth>
                <Button onClick={this.confirmSignUp}>Confirm Sign Up</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignUp);
