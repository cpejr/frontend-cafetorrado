import React from 'react';
import { Line } from 'react-chartjs-2';

const RevisaoGraph = ({ data }) => {
  return (
    <div style={{ height: '50%', width: '100%' }}>
      <Line
        data={data}
        options={{
          responsive: true,
          // title: { text: ' Tempo de torra ', display: true },
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
