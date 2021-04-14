import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { INITALLDATA } from './chartData';

function clearData(refGraph) {
  if (!(refGraph?.current?.chartInstance)) return;
  refGraph.current.chartInstance.data.labels = [];
  refGraph.current.chartInstance.data.datasets[0].data = [];
  refGraph.current.chartInstance.data.datasets[1].data = [];
  refGraph.current.chartInstance.data.datasets[2].data = [];
  refGraph.current.chartInstance.data.datasets[3].data = [];
  refGraph.current.chartInstance.data.datasets[4].data = [];
  refGraph.current.chartInstance.update();
}

async function updateData(refGraph, data) {
  if (!(refGraph?.current?.chartInstance)) return;
  clearData(refGraph);
  data.forEach((elem) => {
    if (!(elem.fields.MdlRunCnt < 100000)) return;
    refGraph.current.chartInstance.data.labels.push((elem.fields.MdlRunCnt * 0.2).toFixed(2));
    refGraph.current.chartInstance.data.datasets[0].data.push(elem.fields.MdlAirScl);
    refGraph.current.chartInstance.data.datasets[1].data.push(elem.fields.MdlGraScl);
    refGraph.current.chartInstance.data.datasets[2].data.push(elem.fields.MdlInjOut);
    refGraph.current.chartInstance.data.datasets[3].data.push(elem.fields.MdlDruOut);
    refGraph.current.chartInstance.data.datasets[4].data.push(elem.fields.MdlAirOut);
    refGraph.current.chartInstance.update();
  });
}

const StaticRefGraph = React.forwardRef((props, ref) => (
  <Line
    height="400"
    width="750"
    id="StaticGraph"
    ref={ref}
    data={INITALLDATA}
    options={{
      legend: {
        position: 'bottom',
        labels: {
          fontFamily: 'Quicksand',
          fontColor: 'white',
          fontSize: 16,
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
            stepSize: 10,
            fontColor: 'white',
          },
        }, {
          id: 'right',
          type: 'linear',
          position: 'right',
          ticks: {
            stepSize: 10,
            fontColor: 'white',
          },
        },
        ],
        xAxes: [
          {
            ticks: {
              min: 0,
              max: 100,
              autoSkip: true,
              fontColor: 'smokewhite',
              maxTicksLimit: 20,
              beginAtZero: true,
            },
          },
        ],
      },
    }}
  />
));

export { StaticRefGraph, updateData };
