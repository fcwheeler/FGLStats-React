import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";

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
    if (this.props.leaderboard && this.props.leaderboard.teams) {
      let topteams = this.props.leaderboard.teams.map(item => {
        let earnings = parseFloat(item.YTDearnings.replace(/[$,]+/g, ""));
        return [item.name, earnings];
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
