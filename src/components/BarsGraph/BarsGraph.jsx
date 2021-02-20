import React from 'react';
import { ResponsiveBullet } from '@nivo/bullet';

const MyResponsiveBullet = ({
  data = [
    {
      id: 'Temperatura',
      ranges: [240],
      measures: [],
      markers: [],
    },
    {
      id: 'Pressão',
      ranges: [10],
      measures: [],
      markers: [],
    },
    {
      id: 'ROR',
      ranges: [10],
      measures: [],
      markers: [],
    },
  ],
}) => (
  <ResponsiveBullet
    data={data}
    margin={{
      top: 5, right: 130, bottom: 63, left: 130,
    }}
    layout="vertical"
    spacing={50}
    titleAlign="middle"
    titleOffsetX={1}
    titleOffsetY={155}
    markerSize={0}
    rangeColors="#0029FF"
    theme={{
      textColor: 'var(--fontColor)',
      fontFamily: 'Rubik 700 sans serif',
      axis: { ticks: { line: { strokeWidth: 0 } } },
    }}
  />
);

function BarsGraph() {
  return <MyResponsiveBullet />;
}
export default BarsGraph;
