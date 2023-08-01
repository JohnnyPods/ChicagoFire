import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Scenario", "%"],
    ["OVERALL", .8867],
    ["5v4", .9112],
    ["5v3", .7554],
    ["4v3", .9034]

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
      title: "PENALTY KILL %",
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
      baselineColor:'white',
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

export function PKGraph() {
  return (
    <Chart 
    chartType="ColumnChart" 
    width="100%" 
    height="600px" 
    data={data}
    options={options} />
  );
}