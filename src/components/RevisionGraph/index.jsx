import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import data from './data';
import './styles.css';

const revisionGraph = () => {
  const [dataChart, setDataChart] = useState(data);
  return (
    <Line
      data={data}
      height="1120"
      width="400"
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 100,
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: { display: false },
            },
          ],
        },
      }}
    />
  );
};

export default revisionGraph;
