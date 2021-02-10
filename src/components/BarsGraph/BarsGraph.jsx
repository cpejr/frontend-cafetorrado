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
    margin={{ top: 20, right: 90, bottom: 20, left: 90 }}
    spacing={30}
    titleAlign="start"
    titleOffsetX={-65}
    titleOffsetY={0}
    markerSize={0}
    rangeColors="#0029FF"
  />
);

function BarsGraph() {
  return <MyResponsiveBullet />;
}
export default BarsGraph;
