/* eslint-disable*/
import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
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
  return <MyResponsiveLine />;
}

const MyResponsiveLine = ({
  data = [
    {
      id: 'Temperatura',
      data: [
        {
          x: 0,
          y: 131,
        },
        {
          x: 1,
          y: 113,
        },
        {
          x: 2,
          y: 224,
        },
        {
          x: 3,
          y: 83,
        },
        {
          x: 4,
          y: 64,
        },
        {
          x: 5,
          y: 174,
        },
      ],
    },
    {
      id: 'Velocidade',
      data: [
        {
          x: 0,
          y: 30,
        },
        {
          x: 1,
          y: 78,
        },
        {
          x: 2,
          y: 127,
        },
        {
          x: 3,
          y: 145,
        },
        {
          x: 4,
          y: 116,
        },
        {
          x: 5,
          y: 130,
        },
      ],
    },
    {
      id: 'Pressão',
      data: [
        {
          x: 0,
          y: 60,
        },
        {
          x: 1,
          y: 22,
        },
        {
          x: 2,
          y: 70,
        },
        {
          x: 3,
          y: 115,
        },
        {
          x: 4,
          y: 142,
        },
        {
          x: 5,
          y: 128,
        },
      ],
    },
    {
      id: 'Ror',
      data: [
        {
          x: 0,
          y: 15,
        },
        {
          x: 1,
          y: 5,
        },
        {
          x: 2,
          y: 20,
        },
        {
          x: 3,
          y: 40,
        },
        {
          x: 4,
          y: 15,
        },
        {
          x: 5,
          y: 0,
        },
      ],
    },
    {
      id: 'Umidade',
      data: [
        {
          x: 0,
          y: 70,
        },
        {
          x: 1,
          y: 65,
        },
        {
          x: 2,
          y: 50,
        },
        {
          x: 3,
          y: 80,
        },
        {
          x: 4,
          y: 95,
        },
        {
          x: 5,
          y: 30,
        },
      ],
    },
  ],
}) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 20, right: 150, bottom: 70, left: 60 }}
    xScale={{ type: 'point' }}
    xFormat=" >-.1f"
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: false,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="linear"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'TEMPO (MIN)',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'VALORES',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    colors={{ scheme: 'set1' }}
    lineWidth={4}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'top-right',
        direction: 'column',
        justify: false,
        translateX: 110,
        translateY: 0,
        itemWidth: 100,
        itemHeight: 25,
        itemsSpacing: 5,
        symbolSize: 20,
        symbolShape: 'circle',
        itemDirection: 'left-to-right',
        itemTextColor: '#777',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    theme={{
      textColor: '#ffffff',
      fontSize: '13px'
    }}
  />
);

export default MainGraph;
