import React from 'react';
import { Line } from 'react-chartjs-2';
import './styles.css';

const RevisionGraph = ({ dataChart }) => (
  <Line
    data={{
      labels: dataChart.temperature.map((_item, index) => index),
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
  />
);

export default RevisionGraph;
