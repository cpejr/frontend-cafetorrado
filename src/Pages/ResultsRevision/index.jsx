import React, { useState, useEffect } from 'react';
import './styles.css';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import CloseIcon from '@material-ui/icons/Close';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import { deleteLastRoast } from '../../components/Functions/RequestHandler/RequestHandler';
import getChartParams from '../../components/Functions/getChartParams';

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
    <div className="informations-revision">
      <h1>Informações</h1>
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
      </div>
    </div>
  </div>
);

export default ResultsRevision;
