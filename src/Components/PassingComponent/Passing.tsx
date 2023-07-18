import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["GAME", "PASSING %","Team Average"],
    ["Mission", .75, .50],
    ["Storm", .20, .62],
    ["TI", .58, .55],
    ["TI", .62, .75],
    ["HC of STL", .78, .80],
    ["Storm", .90, .80,],
    ["Reapers", .66, .55],
    ["Reapers", .84, .39],
    ["TI", .25, .80],
    ["Storm", .44, .77],

  ];

export const options = {
    chartArea: { 
        width: "90%",
        height: "60%",
        left: 70,
        
     },
     seriesType: "bars",
     series: { 1: { type: "line", color: 'green' }, 0: {color: 'red'} },
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
      title: "PASSING",
      minValue: 0,
      maxValue: 1,
      format: 'percent',
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

export function Passing() {
  return (
    <Chart 
    chartType="ComboChart" 
    width="100%" 
    height="600px" 
    data={data}
    options={options} />
  );
}