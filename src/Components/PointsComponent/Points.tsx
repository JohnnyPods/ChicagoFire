import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["GAME", "GOALS", "ASSISTS"],
    ["Mission", 1, 1],
    ["Storm", 0, 3],
    ["TI", 2, 2],
    ["TI", 0, 1],
    ["HC of STL", 1, 0],
    ["Storm", 2, 1],
    ["Reapers", 0, 2],
    ["Reapers", 2, 0],
    ["TI", 0, 0],
    ["Storm", 4, 1],

  ];

export const options = {
    
    chartArea: { 
        width: "90%",
        height: "60%",
        
     },
    isStacked: true,
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
      title: "POINTS",
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

export function Points() {
  return (
    <Chart 
    chartType="ColumnChart" 
    width="100%" 
    height="600px" 
    data={data}
    options={options} />
  );
}