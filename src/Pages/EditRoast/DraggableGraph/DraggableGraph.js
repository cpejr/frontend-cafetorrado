import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { INITDATA } from './GraphData';
import { ThemeContext } from '../../../Context/ThemeContext';
import 'chartjs-plugin-dragdata';

const DraggableRefGraph = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Line
      height="450"
      width="1220"
      id="draggableGraph"
      data={INITDATA}
      options={{
        plugins: { dragData: true },
        legend: {
          position: 'bottom',
          labels: {
            fontFamily: 'Quicksand',
            fontColor: theme?.fontColor || 'black',
            fontSize: 16,
          },
        },
        responsive: false,
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.3,
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
            },
            callback: (point) => (point < 0 ? '' : point),
          }, {
            id: 'right',
            type: 'linear',
            position: 'right',
            ticks: {
              stepSize: 10,
              fontColor: theme?.fontColor || 'black',
            },
            callback: (point) => (point < 0 ? '' : point),
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
              },
            },
          ],
        },
      }}
    />
  );
};

export { DraggableRefGraph };
