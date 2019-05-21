import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleDrawer } from "../actions/layoutAction";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListIcon from "@material-ui/icons/List";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  card: {
    minWidth: 250
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    justifyContent: "flex-end"
  }
};

class SideDrawer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Drawer
          anchor="left"
          open={this.props.layout.drawer}
          onClose={event => this.props.toggleDrawer()}
        >
          <div tabIndex={0} role="button">
            <div className={classes.list}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={event => this.props.toggleDrawer()}>
                  <Close />
                </IconButton>
              </div>
              <List>
                <Link
                  component={RouterLink}
                  to="/leaderboard"
                  underline="none"
                  onClick={event => this.props.toggleDrawer()}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="LeaderBoard" />
                  </ListItem>
                </Link>
                <Link
                  component={RouterLink}
                  to="/TeamReport"
                  underline="none"
                  onClick={event => this.props.toggleDrawer()}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Team Report" />
                  </ListItem>
                </Link>
                <Link
                  component={RouterLink}
                  to="/SurvivorPool"
                  underline="none"
                  onClick={event => this.props.toggleDrawer()}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Survivor Pool" />
                  </ListItem>
                </Link>
                <Link
                  component={RouterLink}
                  to="/Trimesters"
                  underline="none"
                  onClick={event => this.props.toggleDrawer()}
                >
                  {" "}
                  <ListItem button>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trimesters" />
                  </ListItem>
                </Link>
                <Link
                  component={RouterLink}
                  to="/MajorsPool"
                  underline="none"
                  onClick={event => this.props.toggleDrawer()}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Majors Pool" />
                  </ListItem>
                </Link>
                <Link
                  component={RouterLink}
                  to="/HighestFinishers"
                  underline="none"
                  onClick={event => this.props.toggleDrawer()}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Highest Finishers Pool" />
                  </ListItem>
                </Link>
                <Link
                  component={RouterLink}
                  to="/TournamentPickSummary"
                  underline="none"
                  onClick={event => this.props.toggleDrawer()}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tournament Pick Summary" />
                  </ListItem>
                </Link>
              </List>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

const mapStateToProps = state => ({
  ...state
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideDrawer)
);
