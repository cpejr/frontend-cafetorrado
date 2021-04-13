import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { socket } from '../..';
import { getRoasts, getUniqueRoast } from '../../components/RequestHandler/RequestHandler';
import RecipesQuery from './RecipesQuery';
import { INITALLDATA } from './Graph';

function clearData(mainGraph) {
  mainGraph.current.chartInstance.data.labels = [];
  mainGraph.current.chartInstance.data.datasets[0].data = [];
  mainGraph.current.chartInstance.data.datasets[1].data = [];
  mainGraph.current.chartInstance.data.datasets[2].data = [];
  mainGraph.current.chartInstance.data.datasets[3].data = [];
  mainGraph.current.chartInstance.data.datasets[4].data = [];
  mainGraph.current.chartInstance.update();
}
async function updateData(mainGraph, data) {
  const result = await clearData(mainGraph);
  if (!(mainGraph?.current?.chartInstance)) return;
  data.forEach((elem) => {
    if (elem.fields.MdlRunCnt < 10000) {
      mainGraph.current.chartInstance.data.labels.push((elem.fields.MdlRunCnt * 0.2).toFixed(2));
      mainGraph.current.chartInstance.data.datasets[0].data.push(elem.fields.MdlAirScl);
      mainGraph.current.chartInstance.data.datasets[1].data.push(elem.fields.MdlGraScl);
      mainGraph.current.chartInstance.data.datasets[2].data.push(elem.fields.MdlInjOut);
      mainGraph.current.chartInstance.data.datasets[3].data.push(elem.fields.MdlDruOut);
      mainGraph.current.chartInstance.data.datasets[4].data.push(elem.fields.MdlAirOut);
      mainGraph.current.chartInstance.update();
    }
  });
}
let dataToRender = [];
export default function RecipeSelection() {
  const mainGraph = useRef();
  const [roastData, setRoastData] = useState([{}]);
  useEffect(async () => {
    const data = await getRoasts();
    setRoastData(data.data);
  }, []);
  return (
    (!roastData)
      ? (
        <div style={{ backgroundColor: 'smokewhite', color: 'blue' }}>
          Rendering
        </div>
      )
      : (
        <div style={{
          display: 'flex', flexDirection: 'column',
        }}
        >
          {roastData.map((elem) => (
            <button
              style={{
                margin: '0 auto',
                display: 'inline-block',
                borderRadius: '5px',
                width: '120px',
                height: '50px',
                padding: '10px',
              }}
              type="button"
              onClick={async (event) => {
                event.preventDefault();
                dataToRender = await (await (getUniqueRoast(elem.name))).data.data;
                updateData(mainGraph, dataToRender);
              }}
            >
              {elem.name}
              {}
            </button>

          ))}
          <div style={{ }}>
            <Line
              height="300"
              id="main-graph"
              data={INITALLDATA}
              ref={mainGraph}
              options={{
                legend: {
                  position: 'bottom',
                  labels: {
                    fontFamily: 'Quicksand',
                    fontColor: 'white',
                    fontSize: 16,
                  },
                },
                responsive: true,
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
          </div>
        </div>
      )
  );
}
