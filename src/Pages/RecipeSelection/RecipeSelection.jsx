import React, {
  useState, useEffect, useRef,
} from 'react';
import { useHistory } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';
import { GrSelect } from 'react-icons/gr';
import { StaticRefGraph, updateData } from './StaticGraph/StaticGraph';
import { getRoasts, getUniqueRoastData } from '../../components/Functions/RequestHandler/RequestHandler';
import './RecipeSelection.css';

let dataToRender = null;

function RecipeSelection(props) {
  function animateButton() {
    setWrongData(false);
    setTimeout(() => { setWrongData(true); }, 500);
  }
  const history = useHistory();
  const [roastData, setRoastData] = useState([{}]);
  const [wrongData, setWrongData] = useState(true);
  const graphRef = useRef();
  const [dataAtual, setDataAtual] = useState([]);
  useEffect(async () => {
    const { data } = await getRoasts();
    setRoastData(data);
  }, []);
  const roastDate = (roast) => {
    const date = new Date(roast.timestamp * 1);
    const dataformatted = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return <h6>{dataformatted}</h6>;
  };
  const handleSelect = () => {
    console.log(props.location.state);
    if (props.location.state === 'manual') {
      history.push('/manual');
    } else {
      history.push('/automatic');
    }
  };
  return (
    (!roastData)
      ? (
        <div style={{ backgroundColor: 'smokewhite', color: 'blue' }}>
          Rendering info...
        </div>
      )
      : (
        <div className="container">
          <h3 style={{ position: 'absolute' }}>Selecione a torra desejada</h3>
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
                {roastDate(elem)}
              </list>
            ))}
          </div>
          <div className="graph">
            <StaticRefGraph ref={graphRef} />
            <div>
              <button type="button" className="select-button" onClick={handleSelect}>
                <p>Selecionar Torra</p>
                <GrSelect size={30} />
              </button>
              <button type="button" className={wrongData ? 'edit-button' : 'edit-button-animation'} onClick={() => { dataToRender ? (history.push('/editRoast', dataToRender)) : (animateButton()); }}>
                <p>Editar torra</p>
                <FiEdit2 size={30} />
              </button>
              <button type="button" className="delete-button">
                <p>Apagar torra</p>
                <TiDelete size={45} />
              </button>
            </div>
          </div>
        </div>
      )
  );
}

export default RecipeSelection;
