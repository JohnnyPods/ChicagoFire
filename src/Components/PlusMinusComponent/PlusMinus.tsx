import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["GAME", "Plus/Minus", "Team Average"],
    ["Mission", -1, 0],
    ["Storm", 5, 2],
    ["TI", 2, 0],
    ["TI", -3, -1],
    ["HC of STL", -2, 1],
    ["Storm", 2, 4],
    ["Reapers", 0, -2],
    ["Reapers", 2, 1],
    ["TI", 0, 0],
    ["Storm", 4, 3],

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
      minValue: -4,
      maxValue: 4,
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

export function PlusMinus() {
  return (
    <Chart 
    chartType="ComboChart" 
    width="100%" 
    height="600px" 
    data={data}
    options={options} />
  );
}