import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Zone", "Win %","Loss %"],
    ["OVERALL", .75, .25],
    ["OFF ZONE", .20, .80],
    ["DEF ZONE", .58, .42],
    ["NEU ZONE", .62, .38],

  ];

export const options = {
    chartArea: { 
        width: "90%",
        height: "60%",
        left: 70,
        
     },
     seriesType: "bars",
     series: { 1: {color: 'red'}, 0: {color: 'green'} },
    hAxis: {
      title: "GAME",
      titleTextStyle:{
        color: 'white',
        bold: true,
        fontSize: 25,
      },
      textStyle:{
      color:'white',
      },
     
    },
    
    backgroundColor:'black',
    vAxis: {
      minValue: 0,
      maxValue: 1,
      format: 'percent',
      baselineColor:'white',
      minorGridlines:{color:'none'},
      gridlines:{color:'white'},
      textStyle:{
        color:'white',
        },
  
    },
    legend:{
        position:'top',
        alignment: 'center',
        textStyle:{
            color: 'white',
            bold: true,
            fontSize: 25,
    
        },
    },
    titleTextStyle:{
        bold: true,
        fontSize: 22,
        color: 'white',
      },

  };

export function Faceoff() {
  return (
    <Chart 
    chartType="ColumnChart" 
    width="100%" 
    height="600px" 
    data={data}
    options={options} />
  );
}