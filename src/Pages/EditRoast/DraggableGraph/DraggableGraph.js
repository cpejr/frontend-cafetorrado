/* eslint-disable */
import React, { useContext, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { DragData } from './dragData';
import 'chartjs-plugin-dragdata';
import { ThemeContext } from '../../../Context/ThemeContext';

let airOut = []; let airScl = []; let disErr = []; let druOut = []; let graScl = [];
let injOut = []; let runCnt = [];
function desestructData(data) {
  for (let i = 0; i < data.length; i += 1) {
    runCnt.push(data[i].MdlRunCnt);
    injOut.push(data[i].MdlInjOut);
    graScl.push(data[i].MdlGraScl);
    druOut.push(data[i].MdlDruOut);
    disErr.push(data[i].MdlDisErr);
    airScl.push(data[i].MdlAirScl);
    airOut.push(data[i].MdlAirOut);
  }
}

const parseCount = (data) => {
  let correctTime = [];
  data.forEach((data)=>{
    const second = (parseInt(((data / 300) % 1) * 60, 10));
    const minute = Math.trunc(data / 300);
    correctTime.push(`${minute.toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${second.toLocaleString(undefined, { minimumIntegerDigits: 2 })}`);
  });
  return correctTime
};

function updateData(refGraph, data) {
  if (!(refGraph?.current?.chartInstance)) return;
  clearData(refGraph);
  desestructData(data);
  const parsed = parseCount(runCnt);
  refGraph.current.chartInstance.data.labels.push(...parsed);
  refGraph.current.chartInstance.data.datasets[0].data.push(...airScl);
  refGraph.current.chartInstance.data.datasets[1].data.push(...graScl);
  refGraph.current.chartInstance.data.datasets[2].data.push(...injOut);
  refGraph.current.chartInstance.data.datasets[3].data.push(...druOut);
  refGraph.current.chartInstance.data.datasets[4].data.push(...airOut);
}

function clearData(refGraph) {
  airOut = []; airScl = []; disErr = []; druOut = []; graScl = [];
  injOut = []; runCnt = [];
  if (!(refGraph?.current?.chartInstance)) return;
  refGraph.current.chartInstance.data.labels = [];
  refGraph.current.chartInstance.data.datasets[0].data = [];
  refGraph.current.chartInstance.data.datasets[1].data = [];
  refGraph.current.chartInstance.data.datasets[2].data = [];
  refGraph.current.chartInstance.data.datasets[3].data = [];
  refGraph.current.chartInstance.data.datasets[4].data = [];
  refGraph.current.chartInstance.update();
}

const DraggableGraph = React.forwardRef((props, ref) => {
  updateData(ref, props.data);
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Line
        ref={ref}
        height="500"
        width="1520"
        options={{
          legend: {
            position: 'bottom',
            labels: {
              fontFamily: 'Quicksand',
              fontColor: theme?.fontColor || 'black',
              fontSize: 20,
            },
          },
          responsive: false,
          maintainAspectRatio: false,
          elements: {
            line: {
              tension: 0,
            },
          },
          scales: {
            yAxes: [{
              id: 'left',
              type: 'linear',
              position: 'left',
              ticks: {
                min: 0,
                max: 100,
                stepSize: 10,
                fontSize: 20,
                fontColor: theme?.fontColor || 'black',
              },
            }, {
              id: 'left-2',
              type: 'linear',
              position: 'left',
              ticks: {
                min: 0,
                max: 100,
                stepSize: 10,
                fontSize: 20,
                fontColor: theme?.fontColor || 'black',
              },
            },
            {
              id: 'right',
              type: 'linear',
              position: 'right',
              ticks: {
                stepSize: 10,
                fontSize: 20,
                fontColor: theme?.fontColor || 'black',
              },
            },
            ],
            xAxes: [
              {
                ticks: {
                  min: 0,
                  max: 100,
                  autoSkip: true,
                  fontSize: 20,
                  fontColor: theme?.fontColor || 'black',
                  maxTicksLimit: 20,
                  beginAtZero: true,
                },
              }, {
                id: 'LUTS',
                labels: ['0 minutos de torra', '3 minutos de torra', '5 minutos de torra', '7 minutos de torra', '10 minutos de torra'],
                
                ticks: {
                  fontSize: 20
                },
                fontColor: theme?.fontColor || 'black',
                beginAtZero: true,
              },
            ],
          },
          dragData: true,
          magnet: {
            to: (value) => Math.floor(value),
          },

        }}
        data={DragData}
      />
    </div>
  );
});

export default DraggableGraph;
