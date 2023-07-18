import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["GAME", "TURNOVER RATIO", "Team Average"],
    ["Mission", 1.14, .58],
    ["Storm", .98, 1],
    ["TI", 1.33, .7],
    ["TI", .63, 1.2],
    ["HC of STL", .70, 1],
  ];

export const options = {
  seriesType: "bars",
  series: { 1: { type: "line", color: 'green' }, 0: {color: 'red'} },
    chartArea: { 
        width: "90%",
        height: "60%",
        
     },
    isStacked: true,
    hAxis: {
      title: "GAME",
      minValue: 0,
      
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
      title: "PLUS/MINUS",
      baselineColor:'white',
      minorGridlines:{color:'none'},
      gridlines:{color:'white'},
      titleTextStyle:{
        color: 'white',
        bold: true,
        fontSize: 25,
      },
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

export function Turnover() {
  return (
    <Chart 
    chartType="ComboChart" 
    width="100%" 
    height="600px" 
    data={data}
    options={options} />
  );
}