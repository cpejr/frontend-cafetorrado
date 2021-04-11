import React from 'react';
import { socket } from '../..';
import { getUniqueRoast } from '../../components/RequestHandler/RequestHandler';

function RecipeSelection() {
  socket.on('ChartData', (data) => { console.log(data); });

  return (
    <div>
      <button type="button" onClick={(event) => { event.preventDefault(); getUniqueRoast('Igor'); }}>
        hey
      </button>
    </div>
  );
}

export default RecipeSelection;
