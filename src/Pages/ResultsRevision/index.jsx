import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import { MdAddToPhotos, MdClose } from 'react-icons/md';

import { MainGraph } from '../../components/MainGraph/MainGraph';
import { deleteLastRoast } from '../../components/Functions/RequestHandler/RequestHandler';
import getChartParams from '../../components/Functions/getChartParams';
import { useGlobalContext } from '../../Context/GlobalContext';

export const ResultsRevision = () => {
  const history = useHistory();

  const MAX_MARKS = 5;
  const [markNames, setMarkNames] = useState([]); // strings dos marcadores
  const {
    marksGraph, setter, setGraphData, graphData,
  } = useGlobalContext();

  const handleInput = (e) => {
    const annot = markNames;

    // requisição do backend
    if (markNames.length <= MAX_MARKS) {
      annot[e.target.name] = e.target.value;
      setMarkNames([...annot]);
    }
  };

  const secondsToMinutes = (secs) => {
    let minutes = Math.floor(secs / 60);
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    let seconds = Math.floor(secs % 60);
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const marksToSave = [];
    // filtra o crack fora
    const marksWithoutCrack = marksGraph.filter((mark) => {
      if (mark.isCrack) {
        marksToSave.push({
          mark_name: 'CRACK',
          mark_value: mark.value,
          is_crack: mark.isCrack,
        });
      }
      return !mark.isCrack;
    });

    marksWithoutCrack.forEach((mark, index) => {
      marksToSave.push({
        mark_name: markNames[index] ?? `marcador ${index + 1}`,
        mark_value: mark.value,
        is_crack: mark.isCrack,
      });
    });

    const isOk = await getChartParams(marksToSave);

    setTimeout(() => {
      if (isOk) {
        alert('Salvo com sucesso!');
      } else alert('Ocorreu um erro!');
    }, 1000);

    if (isOk) {
      setter([]);
      // setGraphData([]);
      history.push('/RecipeSelection');
    }
  };

  const calculateAverage = (index, local) => {
    const dataArray = graphData[local][index] ? graphData[local][index].data : [];

    let sum = 0;

    dataArray.forEach((value) => {
      sum += value;
    });

    return (sum / dataArray.length).toFixed(2);
  };

  return (
    <div className="content">

      <div className="graph_">
        <MainGraph resetOnLoad={false} />
      </div>
      <h1 className="title">Informações</h1>
      <div className="informations-revision">
        <div className="cols-info">
          <div className="col-info">
            <p>
              Temperatura mínima do grão:
              {' '}
              {graphData !== []
                ? Math.min(...graphData.datasets[1].data).toFixed(2)
                : 0}
              °C
            </p>
            <p>
              Temperatura média do grão:
              {' '}
              {graphData !== []
                ? calculateAverage(1, 'datasets')
                : 0}
              °C
            </p>
            <p>
              Temperatura máxima do grão:
              {' '}
              {graphData !== []
                ? Math.max(...graphData.datasets[1].data).toFixed(2)
                : 0}
              °C
            </p>
          </div>
          <div className="col-info">
            <p>
              Duração da torra:
              {' '}
              { secondsToMinutes(Math.max(...graphData.labels.map((label) => parseInt(label, 10))))}
              {' '}
              minutos
            </p>
            <p>
              {graphData.extraDatas?.[0].name}
              {' '}
              {graphData !== []
                ? calculateAverage(0, 'extraDatas')
                : 0}
              mbar
            </p>
            <p>
              {graphData.extraDatas?.[1].name}
              {' '}
              {graphData !== []
                ? calculateAverage(1, 'extraDatas')
                : 0}
              %
            </p>
          </div>
          <div>
            <div style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '10px',
            }}
            >
              <input className="Mark" name="0" placeholder="Marcador 1" type="text" value={markNames[0]} onChange={handleInput} />
              <input className="Mark" name="1" placeholder="Marcador 2" type="text" value={markNames[1]} onChange={handleInput} />
              <input className="Mark" name="2" placeholder="Marcador 3" type="text" value={markNames[2]} onChange={handleInput} />
              <input className="Mark" name="3" placeholder="Marcador 4" type="text" value={markNames[3]} onChange={handleInput} />
              <input className="Mark" name="4" placeholder="Marcador 5" type="text" value={markNames[4]} onChange={handleInput} />
            </div>
          </div>
        </div>
        <div className="save-name">
          <button type="button" onClick={handleSave}>
            <MdAddToPhotos />
            {' '}
            Salvar
          </button>
          <button type="button" onClick={() => { deleteLastRoast(); setter([]); history.push('/'); }}>
            <MdClose />
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsRevision;
