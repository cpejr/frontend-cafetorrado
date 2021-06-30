import React from 'react';
import { DraggableRefGraph } from './DraggableGraph/DraggableGraph';
import 'chartjs-plugin-dragdata';

const EditRoast = () => (
  // eslint-disable-next-line
  <div onClick={(e) => { e.stopPropagation(); }}>
    <DraggableRefGraph />
  </div>

);

export default EditRoast;
