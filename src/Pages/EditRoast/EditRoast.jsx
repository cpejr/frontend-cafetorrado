import React, { useRef } from 'react';
import DraggableGraph from './DraggableGraph/DraggableGraph';

const EditRoast = ({ location }) => {
  const draggGraphRef = useRef();
  return (
    <DraggableGraph data={location.state} ref={draggGraphRef} />
  );
};

export default EditRoast;
