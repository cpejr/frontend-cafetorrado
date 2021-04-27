import React, { useState, useEffect, useRef } from 'react';
import { StaticRefGraph, updateData } from './StaticGraph/StaticGraph';
import { getRoasts, getUniqueRoastData } from '../../components/Functions/RequestHandler/RequestHandler';
import './RecipeSelection.css';

let dataToRender = [];

function RecipeSelection() {
  const [roastData, setRoastData] = useState([{}]);
  const graphRef = useRef();

  useEffect(async () => {
    const data = await getRoasts();
    setRoastData(data.data);
  }, []);

  return (
    (!roastData)
      ? (
        <div style={{ backgroundColor: 'smokewhite', color: 'blue' }}>
          Rendering
        </div>
      )
      : (
        <div className="container">
          <div className="list">
            {roastData.map((elem) => (
              <list
                className="roast-items"
                onClick={async (event) => {
                  event.preventDefault();
                  dataToRender = (await getUniqueRoastData(elem.roast_id)).data.data;
                  updateData(graphRef, dataToRender);
                }}
              >
                {elem.name}
                <hr />
              </list>
            ))}
          </div>
          <div style={{ marginTop: '120px', display: 'flex', flexDirection: 'column' }}>
            <StaticRefGraph ref={graphRef} />
          </div>
        </div>
      )
  );
}

export default RecipeSelection;
