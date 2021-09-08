import React, {
  useState, useEffect, useRef,
} from 'react';
import { useHistory } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';
import { StaticRefGraph, updateData } from './StaticGraph/StaticGraph';
import { getRoasts, getUniqueRoastData, deleteSpecificRoast } from '../../components/Functions/RequestHandler/RequestHandler';
import './RecipeSelection.css';

let dataToRender = null;

function RecipeSelection() {
  function animateButton() {
    setWrongData(false);
    setTimeout(() => { setWrongData(true); }, 500);
  }
  const history = useHistory();
  const [roastData, setRoastData] = useState([{}]);
  const [wrongData, setWrongData] = useState(true);
  const [DataIdSelected, setDataIdSelected] = useState({});
  const graphRef = useRef();

  useEffect(async () => {
    const { data } = await getRoasts();
    setRoastData(data);
    console.log(data, 'opa');
  }, []);
  const roastDate = (roast) => {
    const date = new Date(roast.timestamp * 1);
    const dataformatted = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return <h5>{dataformatted}</h5>;
  };
  const handleDelete = () => {
    deleteSpecificRoast(DataIdSelected);
    window.location.reload();
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
          <h1 style={{ position: 'absolute' }}>Selecione a torra desejada</h1>
          <div className="list">
            {roastData.map((elem) => (
              <list
                className="roast-items"
                onClick={async (event) => {
                  event.preventDefault();
                  dataToRender = (await getUniqueRoastData(elem.roast_id)).data.data;
                  setDataIdSelected(elem.roast_id);
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
              <button type="button" className={wrongData ? 'edit-button' : 'edit-button-animation'} onClick={() => { dataToRender ? (history.push('/editRoast', dataToRender)) : (animateButton()); }}>
                <p>Editar torra</p>
                <FiEdit2 size={30} />
              </button>
              <button type="button" className="delete-button" onClick={handleDelete}>
                <p>Apagar torra</p>
                <TiDelete size={30} />
              </button>
            </div>
          </div>
        </div>
      )
  );
}

export default RecipeSelection;
