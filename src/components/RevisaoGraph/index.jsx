import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import data from './data';
import './styles.css';

const RevisaoGraph = () => {
  const [dataChart, setDataChart] = useState(data);
  return (
    <div className="chart">
      <Line
        data={dataChart}
        height={null}
        width={null}
        options={{
          responsive: true,
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
    </div>
  );
};

export default RevisaoGraph;
