import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";
require("highcharts-more")(Highcharts);
require("highcharts/modules/solid-gauge")(Highcharts);

let options = {
  chart: {
    type: "solidgauge"
  },
  title: {
    text: "Current Rank",
    y: 50
  },
  pane: {
    center: ["50%", "70%"],
    size: "80%",
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: "#EEE",
      innerRadius: "60%",
      outerRadius: "100%",
      shape: "arc"
    }
  },
  tooltip: {
    enabled: false
  },
  // the value axis
  yAxis: {
    stops: [
      [0.1, "green"], // green
      [0.5, "yellow"], // yellow
      [0.9, "red"] // red
    ],
    lineWidth: 0,
    minorTickInterval: null,
    tickPixelInterval: 0,
    tickWidth: 0,
    labels: {
      y: 16
    },
    min: 1,
    max: 85
  },
  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [
    {
      data: [],
      dataLabels: {
        format:
          '<div style="text-align:center"><span style="font-size:25px;color:' +
          'black">Rank: {y}</span><br/>' +
          '<span style="font-size:12px;color:silver"></span></div>'
      }
    }
  ]
};

class PlaceGauge extends React.Component {
  render() {
    if (this.props.selectedteam.selectedteam && this.props.weeklypicks.teams) {
      let team = this.props.weeklypicks.teams.find(team => {
        return (
          team.formattedteamname === this.props.selectedteam.selectedteam.name
        );
      });
      console.log(team.ranksummary);
      options.series[0].data = [
        team.ranksummary[team.ranksummary.length - 1].rank
      ];
      options.yAxis.max = this.props.weeklypicks.teams.length;
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

export default connect(mapStateToProps)(PlaceGauge);
