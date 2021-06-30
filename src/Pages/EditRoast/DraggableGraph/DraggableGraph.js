import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-dragdata';

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
        callback: (point) => (point < 0 ? '' : point),
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
  onDragStart(e) {
    console.log(e);
  },
  onDrag(e, datasetIndex, index, value) {
    console.log(datasetIndex, index, value);
  },
  onDragEnd(e, datasetIndex, index, value) {
    console.log(datasetIndex, index, value);
  },

};
const DraggableGraph = () => {
  const [dataSet, setDataSet] = useState([50, 50, 50]);
  const [labels, setLabels] = useState(['cpe', 'ijr', 'citi']);
  const data = {
    labels,
    datasets: [{
      data: dataSet,
      borderColor: '9B9B9B',
      borderWidth: 1,
      pointRadius: 10,
      pointHoverRadius: 10,
      pointBackgroundColor: '#609ACF',
      pointBorderWidth: 0,
      spanGaps: false,
    }],
  };

  return (
    <div>
      <Line
        data={data}
        options={options}
      />
    </div>
  );
};

export default DraggableGraph;
