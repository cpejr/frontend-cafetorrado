import React, { useState, useEffect, useRef } from 'react';
import { StaticRefGraph, updateData } from './StaticGraph/StaticGraph';
import { getRoasts, getUniqueRoast } from '../../components/RequestHandler/RequestHandler';
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
        <div style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: '100vh',
        }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {roastData.map((elem) => (
              <list
                className="roast-list"
                onClick={async (event) => {
                  event.preventDefault();
                  dataToRender = await (await (getUniqueRoast(elem.name))).data;
                  updateData(graphRef, dataToRender.data);
                }}
              >
                {elem.name}
                <hr />
              </list>
            ))}
          </div>
          <div style={{ marginTop: '120px', display: 'flex', flexDirection: 'column' }}>
            <StaticRefGraph ref={graphRef} />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <h4>Descrição da torra:</h4>
            </div>
          </div>
        </div>

      )
  );
}

export default RecipeSelection;
