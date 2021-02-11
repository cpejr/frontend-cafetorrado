/* eslint-disable*/
import React, { useState } from 'react';
import { ResponsiveBump } from '@nivo/bump';
import { socket } from '../../index';
import $ from 'jquery';

let oldData = {
  waterTemp: 0,
  fireTemp: 0,
  ROR: 0,
};

function MainGraph() {
  socket.on('connect', (data) => {
    socket.on('newData', (_data) => {
      $.extend(oldData, _data);
    });
  });
  console.log(oldData);
  return <MyResponsiveBump />;
}

const MyResponsiveBump = ({
  data = [
    {
      id: 'Serie 1',
      data: [
        {
          x: oldData.fireTemp,
          y: oldData.waterTemp,
        },
        {
          x: oldData.ROR,
          y: oldData.fireTemp,
        },
        {
          x: oldData.fireTemp,
          y: oldData.ROR,
        },
        {
          x: oldData.ROR,
          y: oldData.waterTemp,
        },
        {
          x: oldData.waterTemp,
          y: oldData.fireTemp,
        },
      ],
    },
  ],
}) => (
  <ResponsiveBump
    data={data}
    margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
    colors={{ scheme: 'spectral' }}
    lineWidth={5}
    activeLineWidth={6}
    inactiveLineWidth={3}
    inactiveOpacity={0.15}
    pointSize={10}
    activePointSize={16}
    inactivePointSize={0}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={3}
    activePointBorderWidth={3}
    pointBorderColor={{ from: 'serie.color' }}
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: -36,
    }}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'ranking',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
  />
);

export default MainGraph;
