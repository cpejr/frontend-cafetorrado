/* eslint-disable */
import React, {
  useEffect, useRef, useState, useContext,
} from 'react';
import { Line } from 'react-chartjs-2';
import { socket } from '../../index';
import { ThemeContext } from '../../Context/ThemeContext';
import { useGlobalContext } from '../../Context/GlobalContext';
import 'chartjs-plugin-annotation';

const MAX_MARKS = 5;

let time = 0;

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

export const MainGraph = ({ setter, setArrayAnnotation }) => {
  let done = false;
  const [crackTime, setCrackTime] = useState(0);
  const [markTime, setMarkTime] = useState([]); // para guardar as marcações
  const [graphWidth, setGraphWidth] = useState(1850);
  const mainGraph = useRef();
  const { theme } = useContext(ThemeContext);

  const {
    marksGraph: annotations,
    setter: setAnnotations,
  } = useGlobalContext();

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

  const crackIt = () => {
    if (setArrayAnnotation) {
      setCrackTime(mainGraph.current.chartInstance.data.datasets[0].data.length);
    }
  };

  const markIt = () => {
    if (markTime && mainGraph.current) {
      setMarkTime(
        (prev) => [...prev, mainGraph.current.chartInstance.data.datasets[0].data.length],
      );
    }
  }

  // a cada mudança de crackTime executa as intruções e armazena no vetor crackTime
  useEffect(() => {
    window.crackIt = crackIt;

    let auxArray = [];

    if (crackTime) {
      auxArray.push({ // adiciona no vetor caso ocorra click
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
        isCrack: true,
      });

      setCrackTime(0);

      // guarda os dados do vetor annot e no vetor anottations
      if (annotations.length < 6 && auxArray.length > 0) {
        setAnnotations((prev) => [...prev, ...auxArray]);
      }
    }
  }, [crackTime]);

  useEffect(() => {
    window.markIt = markIt;

    let auxArray = [];

    if (markTime.length > 0) {
      auxArray.push({ // retorna as marcações do markTime
        drawTime: 'afterDatasetsDraw',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: markTime[markTime.length - 1],
        borderWidth: 2,
        borderColor: 'yellow',
        label: {
          fontFamily: 'quicksand',
          content: createLabelForMarkdown(markTime), // cria as labels de cada marcador
          enabled: true,
          position: 'bottom',
        },
        isCrack: false,
      });

      // guarda os dados do vetor annot e no vetor anottations
      if (
        annotations.length < 6 && // maximo 6 no total
        auxArray.length > 0 &&
        markTime.length <= 5 // maximo 5 mark it
      ) {
        setAnnotations((prev) => [...prev, ...auxArray]);
      }
    }
  }, [markTime]);

  // eslint-disable-next-line
  const createLabelForMarkdown = (input) => `${Math.round(input)}`

  useEffect(() => {
    window.annotations = annotations;
  }, [annotations]);

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
    mainGraph.current.chartInstance.update(); // a cada mudança atualiza a renderização
  }, [graphWidth]);

  return (
    <>
      {/* <button type="button" onClick={createLabelForMarkdown}>UM BOTÃO</button> */}
      <div style={{ width: graphWidth, height: 750, position: 'relative' }}>
        <Line
          padding="0"
          id="main-graph"
          data={INITALLDATA}
          ref={mainGraph}
          options={{
            annotation: {
              annotations, // recebe o vetor e renderiza a linha
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
              },
              {
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
    </>
  );
};
