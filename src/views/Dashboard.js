import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import LeaderboardList from "../Components/LeaderboardList";
import Chart from "../Components/TeamReportChart";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Icon from "@material-ui/core/Icon";
import Card from "../Components/Card/Card.jsx";
import CardHeader from "../Components/Card/CardHeader.jsx";
import CardIcon from "../Components/Card/CardIcon.jsx";
import CardBody from "../Components/Card/CardBody.jsx";
import CardFooter from "../Components/Card/CardFooter.jsx";
import Warning from "@material-ui/icons/Warning";
import GridItem from "../Components/Grid/GridItem.jsx";
import GridContainer from "../Components/Grid/GridContainer.jsx";
import Danger from "../Components/Typography/Danger.jsx";
import red from "@material-ui/core/colors/red";
import dashboardStyle from "../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 1000
  }
});
class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>Dashboard</h1>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={16}
        >
          <Grid item />
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                <CardHeader color="primary" stats icon>
                  <CardIcon color="primary">
                    <Icon>people</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>Teams</p>
                  <h3 className={classes.cardTitle}>85</h3>
                </CardHeader>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                <CardHeader color="success" stats icon>
                  <CardIcon color="success">
                    <Icon>attach_money</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>Total Pool</p>
                  <h3 className={classes.cardTitle}>3,500</h3>
                </CardHeader>
                <CardBody />
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                <CardHeader color="warning" stats icon>
                  <CardIcon color="warning">
                    <Icon>content_copy</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>Used Space</p>
                  <h3 className={classes.cardTitle}>
                    49/50 <small>GB</small>
                  </h3>
                </CardHeader>
                <CardBody />
                <CardFooter stats>
                  <div className={classes.stats}>
                    <Danger>
                      <Warning />
                    </Danger>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Get more space
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>

          <Grid item xs={12} sm={12} md={10}>
            <Paper className={classes.paper} elevation={1}>
              <Chart />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={8}>
            <Paper className={classes.paper} elevation={1}>
              <h2>Top 10 Teams</h2>
              <LeaderboardList topx="10" />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(dashboardStyle)(Dashboard);
