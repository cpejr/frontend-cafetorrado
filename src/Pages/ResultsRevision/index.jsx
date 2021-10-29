import React, { useState, useEffect } from 'react';
import { useHistory, Prompt } from 'react-router-dom';
import './styles.css';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import CloseIcon from '@material-ui/icons/Close';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import { deleteLastRoast } from '../../components/Functions/RequestHandler/RequestHandler';
import getChartParams from '../../components/Functions/getChartParams';
import { useGlobalContext } from '../../Context/GlobalContext';

export const ResultsRevision = () => {
  const history = useHistory();
  const MAX_MARKS = 5;
  const [markNames, setMarkNames] = useState([]); // strings dos marcadores
  const { marksGraph, setter } = useGlobalContext();

  const handleInput = (e) => {
    const annot = markNames;

    // requisição do backend
    if (markNames.length <= MAX_MARKS) {
      annot[e.target.name] = e.target.value;
      setMarkNames([...annot]);
    }
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
      history.push('/RecipeSelection');
    }
  };

  const { annotations } = window;

  return (
    <div className="content">

      <div className="graph_">
        <MainGraph />
      </div>
      <h1 className="title">Informações</h1>
      <div className="informations-revision">
        <div className="cols-info">
          <div className="col-info">
            <p>Temperatura mínima: </p>
            <p>Temperatura média: </p>
            <p>Temperatura máxima: </p>
          </div>
          <div className="col-info">
            <p>Duração da torra: </p>
            <p>Pressão média: </p>
            <p>Velocidade média do tambor: </p>
          </div>
          <div className="col-info">
            <p>Data: </p>
            <p>Hora: </p>
          </div>
          <div>
            <h2>Marcadores</h2>
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
            <AddToPhotosIcon />
            {' '}
            Salvar
          </button>
          <button type="button" onClick={() => { deleteLastRoast(); setter([]); history.push('/'); }}>
            <CloseIcon />
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsRevision;
