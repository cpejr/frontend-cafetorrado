/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { socket } from '../../index';
import { Line } from 'react-chartjs-2';

let dataArray = [
  {
    waterTemp: 0,
    fireTemp: 0,
    ROR: 0,
    time: 0,
  },
];
let counter = 0;
let numErr = 0;
var numErrTime = [];
function dataArr(data) {
  const position = dataArray.length - 1;
  console.log(counter);
  dataArray[position].time + 1 != data.time
    ? ((dataArray = [...dataArray, data]), counter++, (numErr = counter))
    : ((dataArray = [...dataArray, data]), (counter = 0));
}

const MainGraph = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: dataArray,
      datasets: [
        {
          label: 'I really know what i"m doing',
          data: dataArray,
          backgroundColor: ['rgba(192, 255, 6.65)'],
          borderWidth: 4,
        },
      ],
    });
  };
  useEffect(() => {
    socket.on('newData', (_data) => {
      dataArr(_data);
    });
    setInterval(() => {
      numErrTime.push(numErr);
    }, 15 * 100);
    setTimeout(() => {
      socket.off('newData');
      console.log(numErr, numErrTime);
    }, 15 * 60 * 1000);
    chart();
  }, []);

  return (
    <div style={{ height: '50%', width: '80%' }}>
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: { text: ' Tempo de torra ', display: true },
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

export default MainGraph;
