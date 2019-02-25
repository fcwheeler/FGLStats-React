import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";

const theme = require("./highchartTheme_538.json");

const options = {
  title: {
    text: "Top 10 Summary"
  },
  plotOptions: {
    series: {
      pointStart: 1
    }
  },
  series: []
};
class Chart extends React.Component {
  render() {
    Highcharts.setOptions(theme);
    if (this.props.leaderboard && this.props.leaderboard.teams) {
      var colors = Highcharts.getOptions().colors;

      let topteams = this.props.leaderboard.teams.map((item, index) => {
        let earnings = item.YTDearnings;
        return {
          y: earnings,
          name: item.name,
          color: colors[index]
        };
      });
      options.series[0] = {
        data: topteams.slice(0, 10),
        type: "column",
        name: "Top 10"
      };
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

export default connect(mapStateToProps)(Chart);
