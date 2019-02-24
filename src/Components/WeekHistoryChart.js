import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";

require("highcharts-more")(Highcharts);
require("highcharts/modules/solid-gauge")(Highcharts);

const options = {
  chart: {
    type: "line"
  },
  title: {
    text: "Weekly Rank"
  },
  tooltip: {
    enabled: false
  },
  yAxis: {
    reversed: true,
    min: 1,
    max: 85,
    label: "Rank"
  },
  xAxis: {
    min: 1,
    max: 30,
    label: "Week"
  },
  series: [],
  credits: {
    enabled: false
  }
};

class WeekHistoryChart extends React.Component {
  render() {
    if (this.props.weeklypicks && this.props.weeklypicks.teams) {
      let teamname = this.props.teamname;

      console.log("props " + this.props);
      console.log("props.teamname: " + teamname);
      console.log(
        ".weeklypicks.teams.formattedteamname: " +
          this.props.weeklypicks.teams[0].formattedteamname
      );
      let team = this.props.weeklypicks.teams.find(item => {
        return teamname.includes(item.formattedteamname);
      });

      if (!team) {
        console.log("No item with formattedteamname equaling " + teamname);
      }

      let weeklyrank = team.ranksummary.map(item => {
        return [item.week, item.rank];
      });
      options.series[0] = {
        data: weeklyrank,
        type: "line",
        name: "Weekly Rank"
      };
      console.log(options);
    }

    return (
      <>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          allowChartUpdate={true}
          updateArgs={[true, true, true]}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(WeekHistoryChart);
