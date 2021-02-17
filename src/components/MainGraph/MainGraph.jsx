/* eslint-disable*/
import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { socket } from '../../index';
import $ from 'jquery';

let dataArray = [];

function dataArr(data) {
  dataArray = [...dataArray, data];
  console.log(dataArray);
}

function MainGraph() {
  socket.on('connect', (data) => {
    socket.on('newData', (_data) => {
      dataArr(_data);
    });
  });
  return <MyResponsiveLine />;
}

const MyResponsiveLine = ({
  data = [
    {
      id: 'Temperatura',
      data: [
        {
          x: 1,
          y: 2,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 2,
          y: 1,
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
      fontSize: '13px',
    }}
  />
);

export default MainGraph;
