import React, { useContext, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { INITALLDATA } from '../../RecipeSelection/StaticGraph/chartData';
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
  console.log(runCnt);
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

const options = {
  tooltips: { enabled: true },
  scales: {
    xAxes: [{
      gridLines: { display: false, color: 'grey' },
      ticks: { fontColor: '#3C3C3C', fontSize: 14 },
    }],
    yAxes: [{
      scaleLabel: { display: true, labelString: 'Color Strength', fontSize: 14 },
      ticks: {
        display: true,
        min: 0,
        max: 100,
        scaleSteps: 50,
        scaleStartValue: -50,
        maxTicksLimit: 4,
        fontColor: '#9B9B9B',
        padding: 30,
      },
      gridLines: {
        display: false,
        offsetGridLines: true,
        color: '3C3C3C',
        tickMarkLength: 4,
      },
    }],
  },
  legend: {
    display: false,
  },
  dragData: true,

};
const DraggableGraph = React.forwardRef((props, ref) => {
  console.log(props);
  // clearData(ref);
  // desestructData(data);
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Line
        ref={ref}
        data={INITALLDATA}
        options={options}
      />
    </div>
  );
});

export default DraggableGraph;
