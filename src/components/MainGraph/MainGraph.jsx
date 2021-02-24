/*eslint-disable*/
import React, { useEffect, useRef, useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { socket } from '../../index';
import { ThemeContext } from '../../Context/ThemeContext'

let counter = 0;
let numErr = 0;
var numErrTime = [];

function updateData(mainGraph, data) {
  mainGraph.current.chartInstance.data.labels.push(data.time);
  mainGraph.current.chartInstance.data.datasets[0].data.push(data.waterTemp);
  mainGraph.current.chartInstance.data.datasets[1].data.push(data.ROR);
  mainGraph.current.chartInstance.data.datasets[2].data.push(data.fireTemp);
  mainGraph.current.chartInstance.data.datasets[3].data.push(data.pressure);
  mainGraph.current.chartInstance.data.datasets[4].data.push(data.speed);
  mainGraph.current.chartInstance.data.datasets[5].data.push(data.grainyness);
  mainGraph.current.chartInstance.update();

  const position = mainGraph.current.chartInstance.data.labels.length - 1;
  const _position = mainGraph.current.chartInstance.data.datasets[0].data.length - 1
  let isError = (mainGraph.current.chartInstance.data.labels[position] !== data.time)
  let _isError = (mainGraph.current.chartInstance.data.datasets[0].data[_position] !== data.waterTemp)
  isError || _isError ? (counter++) : (numErr = counter),(counter = 0);
  console.log(counter)


}


const INITALLDATA = {
  type: 'line',
  labels:[],
  datasets: [
    {
      fill: false,
      label: 'waterTemp',
      data: [],
      borderColor: '',
      borderWidth: 2,
      pointRadius: 0,
    },

    {
      fill: false,
      label: 'ROR',
      data: [],
      borderColor:'',
      borderWidth:2,
      pointRadius: 0,
    },

    {
      fill: false,
      label: 'fireTemp',
      data: [],
      borderColor:'',
      borderWidth:2,
      pointRadius: 0,
    },

    {
      fill: false,
      label: 'pressure',
      data: [],
      borderColor:'',
      borderWidth:2,
      pointRadius: 0,
    },

    {
      fill: false,
      label: 'speed',
      data: [],
      borderColor:'',
      borderWidth:2,
      pointRadius: 0,
    },

    {
      fill: false,
      label: 'grainyness',
      data: [],
      borderColor:'',
      borderWidth:2,
      pointRadius: 0,
    }

  ]
  }

const MainGraph = () => {
  const mainGraph = useRef();
  const { themeName } = useContext(ThemeContext);

  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--graphColor1');
    (!mainGraph.current.chartInstance) ? false :      
    (mainGraph.current.chartInstance.data.datasets[0].borderColor = 'blue', 
      mainGraph.current.chartInstance.data.datasets[1].borderColor = 'red', 
      mainGraph.current.chartInstance.data.datasets[2].borderColor = 'green', 
      mainGraph.current.chartInstance.data.datasets[3].borderColor = 'yellow', 
      mainGraph.current.chartInstance.data.datasets[4].borderColor = 'purple', 
      mainGraph.current.chartInstance.data.datasets[5].borderColor = 'brown', 
      mainGraph.current.chartInstance.update())
  }, [themeName])

  useEffect(() => {

    socket.on('newData', (_data) => {
      updateData(mainGraph, _data); 
    }); 
    // setInterval(() => {
    //   numErrTime.push(numErr);
    // }, 15 * 100);
    // setTimeout(() => {
    //   socket.off('newData');
    //   console.log(numErr, numErrTime);
    // },  60 * 1000);
  }, []);

  return (
    <div style={{paddingLeft: '3vw', height: '40%', width: '85%' }}>
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
