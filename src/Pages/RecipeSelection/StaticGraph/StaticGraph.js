import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { INITALLDATA } from './chartData';
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

function updateData(refGraph, data) {
  clearData(refGraph);
  desestructData(data);
  if (!(refGraph?.current?.chartInstance)) return;
  refGraph.current.chartInstance.data.labels.push(...runCnt);
  refGraph.current.chartInstance.data.datasets[0].data.push(...airScl);
  refGraph.current.chartInstance.data.datasets[1].data.push(...graScl);
  refGraph.current.chartInstance.data.datasets[2].data.push(...injOut);
  refGraph.current.chartInstance.data.datasets[3].data.push(...druOut);
  refGraph.current.chartInstance.data.datasets[4].data.push(...airOut);
  refGraph.current.chartInstance.update();
}

const StaticRefGraph = React.forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Line
      id="StaticGraph"
      ref={ref}
      data={INITALLDATA}
      options={{
        legend: {
          position: 'bottom',
          labels: {
            fontFamily: 'Quicksand',
            fontColor: theme?.fontColor || 'black',
            fontSize: 25,
          },
        },
        responsive: true,
        maintainAspectRatio: true,
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
              stepSize: 10,
              fontColor: theme?.fontColor || 'black',
              fontSize: 25,
            },
          }, {
            id: 'right',
            type: 'linear',
            position: 'right',
            ticks: {
              stepSize: 10,
              fontColor: theme?.fontColor || 'black',
              fontSize: 25,
            },
          },
          ],
          xAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                autoSkip: true,
                fontColor: theme?.fontColor || 'black',
                maxTicksLimit: 20,
                beginAtZero: true,
                fontSize: 25,
              },
            },
          ],
        },
      }}
    />
  );
});

export { StaticRefGraph, updateData };
