/*eslint-disable*/  
import React, { useEffect, useRef, useState, useContext } from 'react';
import { Chart,Line } from 'react-chartjs-2';
import { socket } from '../../index';
import { ThemeContext } from '../../Context/ThemeContext'
//import data from '../RevisionGraph/data';
import 'chartjs-plugin-annotation';

// let counter = 0;
// let numErr = 0;
// var numErrTime = [];

const txtFileReader = (mainGraph, data) =>{
  if(!(mainGraph?.current?.chartInstance)) return 
  for(let i = 0; i < data.length; i++)
    mainGraph.current.chartInstance.data.datasets[2].data.push(data[i]);
    mainGraph.current.chartInstance.update();
}

function updateData(mainGraph, data) {
  if(!(mainGraph?.current?.chartInstance)) return 
  mainGraph.current.chartInstance.data.labels.push(data.time);
  mainGraph.current.chartInstance.data.datasets[0].data.push(data.waterTemp);
  mainGraph.current.chartInstance.data.datasets[1].data.push(data.waterTemp*50);
  mainGraph.current.chartInstance.data.datasets[2].data.push(data.ROR);
  mainGraph.current.chartInstance.data.datasets[3].data.push(data.fireTemp);
  mainGraph.current.chartInstance.data.datasets[4].data.push(data.pressure);
  mainGraph.current.chartInstance.data.datasets[5].data.push(data.speed);
  mainGraph.current.chartInstance.data.datasets[6].data.push(data.grainyness);
  mainGraph.current.chartInstance.update();

  // const position = mainGraph.current.chartInstance.data.labels.length - 1;
  // const _position = mainGraph.current.chartInstance.data.datasets[0].data.length - 1
  // let isError = (mainGraph.current.chartInstance.data.labels[position] !== data.time)
  // let _isError = (mainGraph.current.chartInstance.data.datasets[0].data[_position] !== data.waterTemp)
  // isError || _isError ? (counter++) : (numErr = counter),(counter = 0);
  // //console.log(counter)
}

const INITALLDATA = {
  type: 'line',
  labels:[],
  datasets: [
    {
      fill: false,
      label: 'waterTemp',
      data: [],
      label:'left',
      yAxisID:'left',
      borderColor: '',
      borderWidth: 3,
      pointRadius: 0,
    },
    {
      label: 'One more data',
      yAxisID: 'right',
      data:[],
      borderColor: '',
      borderWidth: 3,
      pointRadius: 0,
    },
    {
      fill: false,
      label: 'ROR',
      data: [],
      borderColor:'',
      borderWidth:3,
      pointRadius: 0,
    },

    {
      fill: false,
      label: 'fireTemp',
      data: [],
      borderColor:'',
      borderWidth:3,
      pointRadius:0,
    },

    {
      fill: false,
      label: 'pressure',
      data: [],
      borderColor:'',
      borderWidth:3,
      pointRadius: 0,
    },

    {
      fill: false,
      label: 'speed',
      data: [],
      borderColor:'',
      borderWidth:3,
      pointRadius: 0,
    },

    {
      fill: false,
      label: 'grainyness',
      data: [],
      borderColor:'',
      borderWidth:3,
      pointRadius: 0,
    },
    

  ]
  }



const MainGraph = () => {
  const [crackTime, setCrackTime] = useState(0);
  const [torra,setTorra] = useState(0);
  const mainGraph = useRef();
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const color1 = getComputedStyle(document.documentElement).getPropertyValue('--graphColor1');
    const color2 = getComputedStyle(document.documentElement).getPropertyValue('--graphColor2');
    const color3 = getComputedStyle(document.documentElement).getPropertyValue('--graphColor3');
    const color4 = getComputedStyle(document.documentElement).getPropertyValue('--graphColor4');
    const color5 = getComputedStyle(document.documentElement).getPropertyValue('--graphColor5');
    const color6 = getComputedStyle(document.documentElement).getPropertyValue('--graphColor6');
    
    (!mainGraph.current.chartInstance) ? false :      
    ( mainGraph.current.chartInstance.data.datasets[0].borderColor = color1, 
      mainGraph.current.chartInstance.data.datasets[1].borderColor = color2, 
      mainGraph.current.chartInstance.data.datasets[2].borderColor = color3, 
      mainGraph.current.chartInstance.data.datasets[3].borderColor = color4, 
      mainGraph.current.chartInstance.data.datasets[4].borderColor = color5, 
      mainGraph.current.chartInstance.data.datasets[5].borderColor = color6,
      
      mainGraph.current.chartInstance.update())
  }, [theme])
    // useEffect(() =>{
    //   const verticalLinePlugin = {
    //     getLinePosition: function (chart, pointIndex) {
    //         const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
    //         const data = meta.data;
    //         return data[pointIndex]._model.x;
    //     },
    //     renderVerticalLine: function (chartInstance, pointIndex) {
    //         const lineLeftOffset = this.getLinePosition(chartInstance, pointIndex);
    //         const scale = chartInstance.scales['y-axis-0'];
    //         const context = chartInstance.chart.ctx;
      
    //         render vertical line
    //         context.beginPath();
    //         context.strokeStyle = '#ff0000';
    //         context.moveTo(lineLeftOffset, scale.top);
    //         context.lineTo(lineLeftOffset, scale.bottom);
    //         context.stroke();
      
    //         write label
    //         context.fillStyle = "#ff0000";
    //         context.textAlign = 'center';
    //         context.fillText('MY TEXT', lineLeftOffset, (scale.bottom - scale.top) / 2 + scale.top);
    //     },
      
    //     afterDatasetsDraw: function (chart, easing) {
    //         if (chart.config.lineAtIndex) {
    //             chart.config.lineAtIndex.forEach(pointIndex => this.renderVerticalLine(chart, pointIndex));
    //         }
    //     }
    //     };
    //     console.log(Chart)
    //     Chart.plugins.register(verticalLinePlugin);
    // },[])


  console.log("a");
  useEffect(() => {
    socket.on('newData', (_data) => {
      updateData(mainGraph, _data); 
      socket.emit('cleanList')
    }); 

    socket.on('txtFile', (data) => {
      let dataTemp = [data];
      let res = dataTemp[0].split("\n");
      for(let i = 0; i < res.length; i++){
        res[i] = parseFloat(res[i]);
      }
      txtFileReader(mainGraph, res);
      //console.log(res)
    });
    // setInterval(() => {
    //   numErrTime.push(numErr);
    // }, 15 * 100);
    // setTimeout(() => {
    //   socket.off('newData');
    //   console.log(numErr, numErrTime);
    // },  60 * 1000);
    // return () =>
    //   socket.off('newData');

  }, []);

  
  function crackIt() {
    if(!crackTime && mainGraph.current){
      console.log('CRACK ', crackTime);
      setCrackTime(mainGraph.current.chartInstance.data.datasets[0].data.length);
    }
    }

  useEffect(() => {
    window.crackIt = crackIt;
  }, [crackTime])
  
  return (
    <div>
      {/* <button onClick={beginTorra}>play</button>
      <button onClick={endTorra}>end</button> */}
      <Line
        height = '400'
        width = '1000'
        padding = '0'
        id="main-graph"
        data={INITALLDATA}
        ref={mainGraph}
        options={{
            
          annotation : crackTime &&{
            annotations:[
              {
                drawTime: "afterDatasetsDraw",
                type: "line",
                mode: "vertical",
                scaleID: "x-axis-0",
                value: crackTime,
                borderWidth: 5,
                borderColor: "darkorange",
                label: {
                  content: "CRACK",
                  enabled: true,
                  position: "top"
                }
              }

            ]
          },
          legend: {
            position: 'top',
            labels: {
              padding: 20,
              fontSize: 16,
            },
          },
          maintainAspectRatio: false,
          fontSize: 100,
          title: { text: ' Tempo de torra ', display: true },
          elements: {
            line: {
                tension: 0
            }
        },
          scales: {
            scaleLabel: { fontSize: 100 },
            yAxes: [{
                  id: 'left',
                  type:'linear',
                  position:'left',
                  },{
                    id:'right',
                    type: 'linear',
                    position:'right',
                    ticks:{
                      max: 100,
                      min: 0,
                    }
                  }
              ],
            xAxes: [
              {
                gridLines: { display: true },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit:20,
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
export default MainGraph;
