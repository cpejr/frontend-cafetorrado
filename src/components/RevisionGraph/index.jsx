import React from 'react';
import { Line } from 'react-chartjs-2';

const RevisionGraph = ({ dataChart }) => (
  <Line
    data={{
      datasets: [
        {
          label: 'Temperatura',
          backgroundColor: 'blue',
          borderColor: 'blue',
          data: dataChart.temperature,
          fill: false,
        },
        {
          label: 'Velocidade',
          fill: false,
          backgroundColor: 'lightblue',
          borderColor: 'lightblue',
          data: dataChart.velocity,
        },
        {
          label: 'RoR',
          fill: false,
          backgroundColor: 'gray',
          borderColor: 'gray',
          data: dataChart.ror,
        },
        {
          label: 'Umidade',
          fill: false,
          backgroundColor: 'red',
          borderColor: 'red',
          data: dataChart.humidity,
        },
        {
          label: 'Pressão',
          fill: false,
          backgroundColor: 'white',
          borderColor: 'white',
          data: dataChart.pressure,
        },
      ],
    }}
    height="400"
    width="1120"
    options={{
      scales: {
        xAxes: [
          {
            type: 'linear',
            position: 'bottom',
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
        },
        line: {
          borderWidth: 1,
          tension: 0,
        },
      },
    }}
  />
);

export default RevisionGraph;
