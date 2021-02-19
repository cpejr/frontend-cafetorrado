/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import addData from '../Functions/addData';
import { socket } from '../../index';
import { Update } from '@material-ui/icons';

let dataArray = [
  {
    waterTemp: 0,
    fireTemp: 0,
    ROR: 0,
    time: 0,
  },
];

const Temp = [4, 8, 98, 10];
const Temp_ = [8, 65, 84, 65];

let counter = 0;
let numErr = 0;
var numErrTime = [];

function dataArr(data) {
  const position = dataArray.length - 1;
  console.log(counter);
  dataArray[position].time + 1 !== data.time
    ? ((dataArray = [...dataArray, data]), counter++, (numErr = counter))
    : ((dataArray = [...dataArray, data]), (counter = 0));
}

// function addData_(chartData, label, data) {
//   chartData.labels.push(label);
//   chartData.data.datasets.forEach((dataset) => {
//     dataset.data.push(data);
//   });
//   chartData.update();
// }

const MainGraph = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: Temp_,
      datasets: [
        {
          label: 'I really know what i"m doing',
          data: Temp,
          backgroundColor: ['rgba(192, 255, 6.65)'],
          borderWidth: 4,
        },
      ],
    });
  };
  useEffect(() => {
    // socket.on('newData', (_data) => {
    //   dataArr(_data);
    // });
    // setInterval(() => {
    //   numErrTime.push(numErr);
    // }, 15 * 100);
    // setTimeout(() => {
    //   socket.off('newData');
    //   console.log(numErr, numErrTime);
    // }, 15 * 60 * 1000);
    // chart.update();
    //addData_(chart, 'a', 2);
    setInterval(() => {
      chartData.labels.push('a');
    }, 1 * 1000);
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
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 100,
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default MainGraph;
