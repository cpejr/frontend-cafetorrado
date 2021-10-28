import React, {
  useState, useEffect, useRef,
} from 'react';
import { useHistory } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';
import { AiOutlineSelect } from 'react-icons/ai';
import { StaticRefGraph, updateData } from './StaticGraph/StaticGraph';
import {
  getRoasts,
  getUniqueRoastData,
  sendStaticParameters,
  deleteSpecificRoast,
  sendESPData,
  getMarksByRoastId,
} from '../../components/Functions/RequestHandler/RequestHandler';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import { useGlobalContext } from '../../Context/GlobalContext';
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
  const [DataIdSelected, setDataIdSelected] = useState({});
  const graphRef = useRef();

  const { setter } = useGlobalContext();

  useEffect(async () => {
    const { data } = await getRoasts();
    setRoastData(data);
  }, []);

  useEffect(() => {
    const { state } = props.location;
    if (state === 'manual') {
      sendESPData({ MdlManChr: 1 }); return;
    }
    if (state === 'automatic') {
      sendESPData({ MdlManChr: 2 });
    }
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
  const handleSelect = async () => {
    sendStaticParameters(DataIdSelected);

    if (props.location.state === 'manual') {
      history.push('/manual');
    } else {
      history.push('/automatic');
    }
  };

  const renderMarksForRoast = async (roastId) => {
    const marks = await getMarksByRoastId(roastId);

    // formata para o gráfico
    marks.forEach((mark, index) => {
      const formattedMark = {
        drawTime: 'afterDatasetsDraw',
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        borderWidth: 2,
        borderColor: mark.is_crack ? 'darkorange' : 'yellow',
        value: mark.mark_value,
        label: {
          fontFamily: 'quicksand',
          content: mark.mark_name,
          enabled: true,
          position: 'bottom',
        },
      };
      marks[index] = formattedMark;
    });
    setter(marks);
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
                  await renderMarksForRoast(elem.roast_id);
                }}
              >
                {elem.name}
                {roastDate(elem)}
              </list>
            ))}
          </div>
          <div className="graph">
            <MainGraph />
            <div>
              <button type="button" className="select-button" onClick={handleSelect}>
                <p>Selecionar Torra</p>
                <AiOutlineSelect size={30} />
              </button>
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
