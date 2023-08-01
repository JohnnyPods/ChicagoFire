import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Scenario", "%"],
    ["Un-Assisted", .58],
    ["Primary Assist", .26],
    ["Secondary Assist", .14]

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
      title: "SCORING BREAKDOWN",
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

export function GPGGraph() {
  return (
    <Chart 
    chartType="ColumnChart" 
    width="100%" 
    height="600px" 
    data={data}
    options={options} />
  );
}