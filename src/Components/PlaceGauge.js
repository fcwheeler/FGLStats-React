import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
require('highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);



let options =  {
    chart: {
        type: 'solidgauge'
      },
      title: {
          
        text:"Current Rank",
        y: 50
    },  
      pane: {
        center:     ['50%', '70%'],
        size:       '80%',
        startAngle: -90,
        endAngle:   90,
        background: {
          backgroundColor: '#EEE',
          innerRadius:     '60%',
          outerRadius:     '100%',
          shape:           'arc'
        }
      },
      tooltip: {
        enabled: false
      },
      // the value axis
      yAxis: {
        stops:             [
          [0.1, 'green'], // green
          [0.5, 'yellow'], // yellow
          [0.9, 'red'] // red
        ],
        lineWidth:         0,
        minorTickInterval: null,
        tickPixelInterval: 0,
        tickWidth:         0,
        labels:            {
          y: 16
        },
        min:               1,
        max:               85
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y:           5,
            borderWidth: 0,
            useHTML:     true
          }
        }
      },
      credits:     {
        enabled: false
      },
      series:      [{
        data:       [5],
        dataLabels: {
          format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  'black">Rank: {y}</span><br/>' + 
                  '<span style="font-size:12px;color:silver"></span></div>'
        }
      }]

};

function nth(n){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}

class PlaceGauge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentRank: this.props.rank,
          numOfPlayers: this.props.players,
        
        };
      }  
  
    render() { 
        options.series[0].data = this.state.currentRank
        options.yAxis.max = this.state.numOfPlayers
        console.log(options);
      return (
          <>
        <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      </>
      );
    }
  }



  export default PlaceGauge