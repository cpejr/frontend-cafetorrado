import React, { useRef } from 'react';
import DraggableGraph from './DraggableGraph/DraggableGraph';

const EditRoast = (props) => {
  const graphRef = useRef();
  return (
    // eslint-disable-next-line
    <DraggableGraph data={props.location.state} ref = {graphRef}  />
  );
};

export default EditRoast;
