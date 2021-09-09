/*eslint-disable*/
import React, {
  useEffect, useRef, useState, useContext,
} from 'react';
import { Line } from 'react-chartjs-2';
import { socket } from '../../index';
import { ThemeContext } from '../../Context/ThemeContext';
import 'chartjs-plugin-annotation';

let time = 0;
// let done = false;
// function parseTime(mainGraph, data){
//   let time = 0;
//   if(!done){
//     mainGraph.current.chartInstance.data.labels[0] = data.fields.MdlRunCnt;
//     done = true
//   }
//   time = (data.fields.MdlRunCnt) - (mainGraph.current.chartInstance.data.labels[0]);
//   return time;
// }

function updateData(mainGraph, data) {
  if (!(mainGraph?.current?.chartInstance)) return;
  mainGraph.current.chartInstance.data.labels.push((data.fields.MdlRunCnt * 0.2).toFixed(2));
  mainGraph.current.chartInstance.data.datasets[0].data.push(data.fields.MdlAirScl);
  mainGraph.current.chartInstance.data.datasets[1].data.push(data.fields.MdlGraScl);
  mainGraph.current.chartInstance.data.datasets[2].data.push(data.fields.MdlManInj);
  mainGraph.current.chartInstance.data.datasets[3].data.push(data.fields.MdlManCdr);
  mainGraph.current.chartInstance.data.datasets[4].data.push(data.fields.MdlManCar);

  mainGraph.current.chartInstance.update();
  time = data.fields.MdlRunCnt;
}

const INITALLDATA = {
  type: 'line',
  labels: [],
  datasets: [
    {
      fill: false,
      label: 'Temperatura do Ar',
      data: [],
      yAxisID: 'left',
      borderColor: '',
      borderWidth: 3,
      pointRadius: 0,
    },
    {
      fill: false,
      label: 'Temperatura do Grão',
      yAxisID: 'left',
      data: [],
      borderColor: '',
      borderWidth: 3,
      pointRadius: 0,
    },
    {
      fill: false,
      label: 'Percentual de chama',
      data: [],
      yAxisID: 'right',
      borderColor: '',
      borderWidth: 3,
      pointRadius: 0,
    },

    {
      fill: false,
      label: 'Percentual do Tambor',
      yAxisID: 'right',
      data: [],
      borderColor: '',
      borderWidth: 3,
      pointRadius: 0,
    },

    {
      fill: false,
      label: 'Percentual de ar',
      yAxisID: 'right',
      data: [],
      borderColor: '',
      borderWidth: 3,
      pointRadius: 0,
    },

  ],
};

export const MainGraph = ({ setter }) => {
  let done = false;
  const [crackTime, setCrackTime] = useState(0);
  const [markTime, setmarkTime] = useState(0);
  const [graphWidth, setGraphWidth] = useState(1850);
  const mainGraph = useRef();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    socket.on('realData', (data) => {
      updateData(mainGraph, data);
      if (setter && !done) { setter(false); done = true; }
    });
  }, []);
  useEffect(() => {
    const color1 = getComputedStyle(document.documentElement).getPropertyValue('--graphColor1');
    const color2 = getComputedStyle(document.documentElement).getPropertyValue('--graphColor2');
    const color3 = getComputedStyle(document.documentElement).getPropertyValue('--graphColor3');
    const color4 = getComputedStyle(document.documentElement).getPropertyValue('--graphColor4');
    const color5 = getComputedStyle(document.documentElement).getPropertyValue('--graphColor5');

    (!mainGraph.current.chartInstance) ? false
      : (mainGraph.current.chartInstance.data.datasets[0].borderColor = color1,
        mainGraph.current.chartInstance.data.datasets[1].borderColor = color2,
        mainGraph.current.chartInstance.data.datasets[2].borderColor = color3,
        mainGraph.current.chartInstance.data.datasets[3].borderColor = color4,
        mainGraph.current.chartInstance.data.datasets[4].borderColor = color5,

        mainGraph.current.chartInstance.update());
  }, [theme]);

  function crackIt() {
    if (!crackTime && mainGraph.current) {
      console.log('CRACK ', crackTime);
      setCrackTime(mainGraph.current.chartInstance.data.datasets[0].data.length);
    }
  }
  function markIt() {
    if (!markTime && mainGraph.current) {
      console.log('MARKED ', markTime);
      setmarkTime(mainGraph.current.chartInstance.data.datasets[0].data.length);
    }
  }

  useEffect(() => {
    window.crackIt = crackIt;
  }, [crackTime]);

  useEffect(() => {
    window.markIt = markIt;
  }, [markTime]);

  useEffect(() => {
    function listener() {
      if (window.drawerIsOpen) {
        setGraphWidth(1650);
      } else {
        setGraphWidth(1850);
      }
    }

    window.addEventListener('drawer-toggle', listener);

    return () => { window.removeEventListener('drawer-toggle', listener); };
  }, [window.drawerIsOpen]);

  useEffect(() => {
    mainGraph.current.chartInstance.update();
  }, [graphWidth]);

  return (
    <div style={{ width: graphWidth, height: 750, position: 'relative' }}>
      <Line
        padding="0"
        id="main-graph"
        data={INITALLDATA}
        ref={mainGraph}
        options={{
          annotation: crackTime && {
            annotations: [
              {
                drawTime: 'afterDatasetsDraw',
                type: 'line',
                mode: 'vertical',
                scaleID: 'x-axis-0',
                value: crackTime,
                borderWidth: 2,
                borderColor: 'darkorange',
                label: {
                  fontFamily: 'quicksand',
                  content: 'CRACK',
                  enabled: true,
                  position: 'bottom',
                },
              },
              {
                drawTime: 'afterDatasetsDraw',
                type: 'line',
                mode: 'vertical',
                scaleID: 'x-axis-0',
                value: markTime,
                borderWidth: 2,
                borderColor: 'yellow',
                label: {
                  fontFamily: 'quicksand',
                  content: 'MARK',
                  enabled: true,
                  position: 'bottom',
                },
              },
            ],
          },
          legend: {
            position: 'bottom',
            labels: {
              fontFamily: 'Quicksand',
              fontColor: theme?.fontColor || 'black',
              fontSize: 14,
            },
          },
          /*  responsive: true, */
          maintainAspectRatio: false,

          title: {
            text: ' Tempo de torra ',
            fontFamily: 'Quicksand',
            fontSize: 26,
            fontColor: theme?.fontColor || 'black',
            display: true,
          },

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
                fontColor: theme?.fontColor || 'black',
              },
            }, {
              id: 'right',
              type: 'linear',
              position: 'right',
              ticks: {
                min: 0,
                max: 100,
                stepSize: 10,
                fontColor: theme?.fontColor || 'black',
              },
            },
            ],
            xAxes: [
              {
                ticks: {
                  autoSkip: true,
                  fontColor: theme?.fontColor || 'black',
                  maxTicksLimit: 20,
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
