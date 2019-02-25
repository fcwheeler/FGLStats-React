import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { selectTeam } from "../actions/selectedTeamAction";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  }
});

class SelectTeam extends Component {
  handleTeamChange = e => {
    var team = this.props.leaderboard.teams.find(element => {
      return element.name === e.target.value;
    });

    this.props.selectTeam(team);
  };

  render() {
    return (
      <div>
        <Select value="select" onChange={this.handleTeamChange}>
          <MenuItem value="select" selected>
            Select
          </MenuItem>
          {this.props.leaderboard.teams ? (
            this.props.leaderboard.teams
              .slice()
              .sort((a, b) => {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              })
              .map(item => (
                <MenuItem value={item.name} key={item.id}>
                  {(item.name.length > 15
                    ? item.name.substring(0, 15) + "..."
                    : item.name) +
                    " (" +
                    item.owner +
                    ")"}
                </MenuItem>
              ))
          ) : (
            <> </>
          )}
        </Select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  selectTeam: team => dispatch(selectTeam(team))
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectTeam)
);
