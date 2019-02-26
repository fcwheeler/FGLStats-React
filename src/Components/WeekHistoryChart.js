import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";
import { LoadingOverlay, Loader } from "react-overlay-loader";
require("highcharts-more")(Highcharts);
require("highcharts/modules/solid-gauge")(Highcharts);
require("highcharts/modules/annotations")(Highcharts);

const options = {
  chart: {
    type: "line"
  },
  title: {
    text: "Weekly Rank"
  },

  yAxis: {
    reversed: true,
    min: 1,
    max: 98,
    label: "Rank"
  },
  xAxis: {
    min: 1,
    max: 30,
    label: "Week",
    minTickInterval: 1
  },
  plotOptions: {
    series: {
      pointStart: 1
    }
  },
  series: [],
  credits: {
    enabled: false
  },
  annotations: [
    {
      labelOptions: {
        backgroundColor: "rgba(255,255,255,0.5)",
        verticalAlign: "top",
        y: 15
      },
      labels: []
    }
  ]
};

class WeekHistoryChart extends React.Component {
  render() {
    if (this.props.selectedteam.selectedteam == null) {
    } else if (this.props.weeklypicks && this.props.weeklypicks.teams) {
      let selectedteamname = this.props.selectedteam.selectedteam.name;
      let team = this.props.weeklypicks.teams.find(item => {
        return selectedteamname == item.formattedteamname;
      });

      if (!team) {
        console.log(
          "No item with formattedteamname equaling " + selectedteamname
        );
      }

      let weeklyrank = team.ranksummary.map(item => {
        return [item.week, item.rank];
      });
      options.series[0] = {
        data: weeklyrank,
        type: "line",
        name: "Weekly Rank"
      };

      let firstMissedCut = team.weeksummary.find(pick => {
        return pick.weekearnings === 0;
      });
      options.annotations[0].labels = [];
      if (firstMissedCut) {
        options.annotations[0].labels.push({
          point: {
            xAxis: 0,
            yAxis: 0,
            x: firstMissedCut.week,
            y: team.ranksummary[firstMissedCut.week - 1].rank
          },
          text: "Out of Survivor Pool"
        });
      }

      console.log(options);
    }

    return (
      <>
        {this.props.selectedteam.selectedteam != null &&
        this.props.weeklypicks &&
        this.props.weeklypicks.teams ? (
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            allowChartUpdate={true}
            updateArgs={[true, true, true]}
          />
        ) : (
          <Loader fullpage loading />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(WeekHistoryChart);
