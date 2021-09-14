import React, { useState, useEffect } from 'react';
import './styles.css';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import CloseIcon from '@material-ui/icons/Close';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import { deleteLastRoast } from '../../components/Functions/RequestHandler/RequestHandler';
import getChartParams from '../../components/Functions/getChartParams';

const [mark1, setmark1] = useState();
const [mark2, setmark2] = useState();
const [mark3, setmark3] = useState();
const [mark4, setmark4] = useState();
const [mark5, setmark5] = useState();

useEffect(() => {
  setmark1(marcador1);
  setmark2(marcador2);
  setmark3(marcador3);
  setmark4(marcador4);
  setmark5(marcador5);
}, []);

const handleInput = () => (
// requisição do backend
);

const ResultsRevision = () => (
  <div className="content">
    <div className="save-name">
      <input type="text" name="name" />
      <button type="button" onClick={getChartParams}>
        <AddToPhotosIcon />
        {' '}
        Salvar
      </button>
      <button type="button" onClick={deleteLastRoast}>
        <CloseIcon />
        Excluir
      </button>
    </div>
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
          <div className="Mark">
            <input placeholder="Marcador 1" type="text" value={marcador1} onChange={(e) => handleInput(e, "mark1")} />
            <input placeholder="Marcador 2" type="text" value={marcador2} onChange={(e) => handleInput(e, "mark2")} />
            <input placeholder="Marcador 3" type="text" value={marcador3} onChange={(e) => handleInput(e, "mark3")} />
            <input placeholder="Marcador 4" type="text" value={marcador4} onChange={(e) => handleInput(e, "mark4")} />
            <input placeholder="Marcador 5" type="text" value={marcador5} onChange={(e) => handleInput(e, "mark5")} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResultsRevision;
