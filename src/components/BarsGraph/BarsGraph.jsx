import React from 'react';
import { ResponsiveBullet } from '@nivo/bullet';

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
    margin={{ top: 520, right: 650, bottom: 60, left: 350 }}
    spacing={30}
    titleAlign="start"
    titleOffsetX={-60}
    titleOffsetY={0}
    markerSize={0}
    rangeColors="#0029FF"
  />
);

function BarsGraph() {
  return <MyResponsiveBullet />;
}
export default BarsGraph;
