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
    max: 15,
    label: "Week"
  },
  series: [
    {
      data: [1, 5, 15, 62, 62, 55],
      name: "Weekly Rank"
    }
  ],
  credits: {
    enabled: false
  }
};

class WeekHistoryChart extends React.Component {
  render() {
    return (
      <>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(WeekHistoryChart);
