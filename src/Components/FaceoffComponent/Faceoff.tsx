import React from 'react'
import './Faceoff.css';
import { Chart } from "react-google-charts";

export const data1 = [
  ["Face-Off", "Numbers"],
  ["WON", 10],
  ["LOST", 4],

];
export const data2 = [
    ["Face-Off", "Numbers"],
    ["WON", 4],
    ["LOST", 4],
  
  ];
  export const data3 = [
    ["Face-Off", "Numbers"],
    ["WON", 52],
    ["LOST", 13],
  
  ];
  export const data4 = [
    ["Face-Off", "Numbers"],
    ["WON", 26],
    ["LOST", 13],
  
  ];

export const options1 = {
  title: "Face-Off % Overall",
  slices: {
    0: { color: "green", offset:.1 },
    1: { color: "red" },
  },
  is3D: true,
  legend: {
    position: 'bottom',
    textStyle:{
      color: 'white',  
      fontSize: 20,
    }
},
  backgroundColor:'black',
  titleTextStyle:{
    bold: true,
    fontSize: 22,
    color: 'white',
  },
  chartArea:{width:'100%', height:'80%', left:80,},
  fontSize:'22',
};
export const options2 = {
    title: "Face-Off % Offensive Zone",
    slices: {
      0: { color: "green", offset:.1 },
      1: { color: "red" },
    },
    is3D: true,
    legend: {
      position: 'bottom',

      textStyle:{
        color: 'white',  
        fontSize: 20,
      }
  },
    backgroundColor:'black',
    titleTextStyle:{
      bold: true,
      fontSize: 22,
      color: 'white',
    },
    chartArea:{width:'100%', height:'80%', left:80,},
    fontSize:'22',
  };
  export const options3 = {
    title: "Face-Off % Neutral Zone",
    slices: {
      0: { color: "green", offset:.1 },
      1: { color: "red" },
    },
    is3D: true,
    legend: {
      position: 'bottom',
      alignment: 'center',
      textStyle:{
        color: 'white',  
        fontSize: 20,
      }
  },
    backgroundColor:'black',
    titleTextStyle:{
      bold: true,
      fontSize: 22,
      color: 'white',
    },
    chartArea:{width:'100%', height:'80%', left:80,},
    fontSize:'22',
  };
  export const options4 = {
    title: "Face-Off % Defensive Zone",
    slices: {
      0: { color: "green", offset:.1 },
      1: { color: "red" },
    },
    is3D: true,
    legend: {
      position: 'bottom',
      textStyle:{
        color: 'white',  
        fontSize: 20,
      }
  },
    backgroundColor:'black',
    titleTextStyle:{
      bold: true,
      fontSize: 22,
      color: 'white',
    },
    chartArea:{width:'100%', height:'80%', left:80,},
    fontSize:'22',
  };



export function Faceoff() {
  return (
    <div className="Faceoff">
        <div className="Faceoff1">
    <Chart
    className="chart1"
      chartType="PieChart"
      data={data1}
      options={options1}
      height={"300px"}
      width={"550px"}
    />
    <Chart
    className="chart2"
    chartType="PieChart"
    data={data2}
    options={options2}
    height={"300px"}
    width={"550px"}
  />
  </div>
  <div className="Faceoff2">
    <Chart
    className="chart3"
      chartType="PieChart"
      data={data3}
      options={options3}
      height={"300px"}
      width={"550px"}
    />
    <Chart
    className="chart4"
    chartType="PieChart"
    data={data4}
    options={options4}
    height={"300px"}
    width={"550px"}
  />
  </div>
</div>
  );
}
