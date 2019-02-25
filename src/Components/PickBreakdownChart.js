import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";

const options = {
  title: {
    text: "Pick Breakdown"
  },
  chart: {
    type: "bar"
  },
  legend: {
    enabled: false
  },
  yAxis: {
    minTickInterval: 1,
    title: {
      enabled: true,
      text: "Count",
      style: {
        fontWeight: "normal"
      }
    }
  },
  xAxis: {
    categories: []
  },
  plotOptions: {},
  series: [{ data: [], name: "Pick Count" }]
};
class PickBreakdownChart extends React.Component {
  render() {
    // Highcharts.setOptions(theme);
    if (
      this.props.selectedteam.selectedteam &&
      this.props.leaderboard &&
      this.props.leaderboard.teams &&
      this.props.weeklypicks &&
      this.props.weeklypicks.teams
    ) {
      var colors = Highcharts.getOptions().colors;
      let selectedteamname = this.props.selectedteam.selectedteam.name;
      let team = this.props.weeklypicks.teams.find(item => {
        return selectedteamname == item.formattedteamname;
      });
      options.series[0] = { data: [], name: "Pick Count" };
      options.xAxis.categories = [];

      /* let TopTenFinishes = 1;
      let TopTenData = { y: TopTenFinishes, color: "#77AB43" };
      options.series[0].data.push(TopTenData);
      options.xAxis.categories.push("Top 10 Finish");
*/
      let skins = team.ranksummary.filter(rankweek => {
        return rankweek.skin;
      }).length;
      let skinsData = { y: skins, color: "#77AB43" };
      options.series[0].data.push(skinsData);
      options.xAxis.categories.push("Skins");

      let NoSelection = team.picks.filter(pickweek => {
        return pickweek.player == "No golfer selected";
      }).length;
      let NoSelectionData = { y: NoSelection, color: "#FF2700" };
      options.series[0].data.push(NoSelectionData);
      options.xAxis.categories.push("No Selection");

      let Missedcount = team.picks.filter(pickweek => {
        return (
          pickweek.player !== "No golfer selected" && pickweek.earnings == 0
        );
      }).length;
      let MissedData = { y: Missedcount, color: "#FF2700" };
      options.series[0].data.push(MissedData);
      options.xAxis.categories.push("Missed Cut");

      let Madecount = team.picks.filter(pickweek => {
        return (
          pickweek.player !== "No golfer selected" && pickweek.earnings !== 0
        );
      }).length;
      let MadeData = { y: Madecount, color: "#77AB43" };
      options.series[0].data.push(MadeData);
      options.xAxis.categories.push("Made Cut");

      console.log(options);
    }

    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        allowChartUpdate={true}
        updateArgs={[true, true, true]}
      />
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(PickBreakdownChart);
