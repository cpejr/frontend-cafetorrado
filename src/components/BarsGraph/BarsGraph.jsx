import React from 'react';
import { ResponsiveBullet, Bullet } from '@nivo/bullet';

const MyResponsiveBullet = ({
  data = [
    {
      id: 'Temperatura',
      ranges: [240],
      measures: [0],
      markers: [0],
    },
    {
      id: 'Pressão',
      ranges: [10],
      measures: [0],
      markers: [0],
    },
    {
      id: 'ROR',
      ranges: [10],
      measures: [0],
      markers: [0],
    },
  ],
}) => (
  <ResponsiveBullet
    data={data}
    margin={{ top: 5, right: 130, bottom: 30, left: 130 }}
    layout="vertical"
    spacing={50}
    titleAlign="middle"
    titleOffsetX={1}
    titleOffsetY={155}
    markerSize={0}
    rangeColors="#0029FF"
  />
);

function BarsGraph() {
  return <MyResponsiveBullet />;
}
export default BarsGraph;
