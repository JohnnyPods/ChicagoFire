import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Scenario", "%"],
    ["OVERALL", .2325],
    ["5v4", .2022],
    ["5v3", .3860],
    ["4v3", .2510],

  ];


export const options = {
    chartArea: { 
        width: "90%",
        height: "60%",
        left: 70,
        
     },
     seriesType: "bars",
     series: {0: {color: 'red'} },
    hAxis: {
      title: "POWER PLAY %",
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
      format: 'percent',
      baselineColor:'White',
      minorGridlines:{color:'none'},
      gridlines:{color:'white'},
      textStyle:{
        color:'white',
        },
  
    },
    legend:{
        position:'none',
    },
    titleTextStyle:{
        bold: true,
        fontSize: 22,
        color: 'white',
      },

  };

export function PPGraph() {
  return (
    <Chart 
    chartType="ColumnChart" 
    width="100%" 
    height="600px" 
    data={data}
    options={options} />
  );
}