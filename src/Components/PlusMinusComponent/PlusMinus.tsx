import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["GAME", "Plus/Minus", { role: "style" }],
    ["Mission", -1, "red"],
    ["Storm", 5, "red"],
    ["TI", 2, "red"],
    ["TI", -3, "red"],
    ["HC of STL", -2, "red"],
    ["Storm", 2, "red"],
    ["Reapers", 0, "red"],
    ["Reapers", 2, "red"],
    ["TI", 0, "red"],
    ["Storm", 4, "red"],

  ];

export const options = {
    
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
    legend: 'none',
    titleTextStyle:{
        bold: true,
        fontSize: 22,
        color: 'white',
      },

  };

export function PlusMinus() {
  return (
    <Chart 
    chartType="ColumnChart" 
    width="100%" 
    height="600px" 
    data={data}
    options={options} />
  );
}