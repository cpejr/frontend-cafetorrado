import React, { useRef } from 'react';
import DraggableGraph from './DraggableGraph/DraggableGraph';

const EditRoast = (props) => {
  const draggGraphRef = useRef();
  return (
    // eslint-disable-next-line
    <DraggableGraph data={props.location.state} ref = {draggGraphRef}  />
  );
};

export default EditRoast;
