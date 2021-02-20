/*eslint-disable*/
import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { socket } from '../../index';

let counter = 0;
let numErr = 0;
var numErrTime = [];

function updateData(mainGraph, data) {
  mainGraph.current.chartInstance.data.labels.push(data.time);
  mainGraph.current.chartInstance.data.datasets[0].data.push(data.waterTemp);
  mainGraph.current.chartInstance.update();
  const position = mainGraph.current.chartInstance.data.labels.length - 1;
  const _position = mainGraph.current.chartInstance.data.datasets[0].data.length - 1
  let isError = (mainGraph.current.chartInstance.data.labels[position] !== data.time)
  let _isError = (mainGraph.current.chartInstance.data.datasets[0].data[_position] !== data.waterTemp)
  isError || _isError ? (counter++) : (numErr = counter),(counter = 0);
  console.log(counter, data,mainGraph.current.chartInstance.data.labels)
}
const INITALLDATA = {
  type: 'line',
  labels:[],
  datasets: [
    {
      label: 'I really know what i"m doing',
      data: [],
      backgroundColor: ['rgba(192, 255, 6.65)'],
      borderWidth: 4,
    }]
  }

const MainGraph = () => {
  const mainGraph = useRef();
  
  useEffect(() => {
    socket.on('newData', (_data) => {
      updateData(mainGraph, _data);
    });
    setInterval(() => {
      numErrTime.push(numErr);
    }, 15 * 100);
    setTimeout(() => {
      socket.off('newData');
      console.log(numErr, numErrTime);
    },  60 * 1000);
  }, []);

  return (
    <div style={{ height: '50%', width: '80%' }}>
      <Line
        id="main-graph"
        data={INITALLDATA}
        ref={mainGraph}
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
