import React from 'react';
import './styles.css';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import CloseIcon from '@material-ui/icons/Close';
import revisionGraph from '../../components/RevisionGraph';

const ResultsRevision = () => (
  <div className="content">
    <div className="save-nome">
      <input type="text" name="name" />
      <button type="button">
        <AddToPhotosIcon />
        {' '}
        Salvar
      </button>
      <button type="button">
        <CloseIcon />
        Excluir
      </button>
    </div>
    <div className="graph">
      <revisionGraph />
    </div>
    <div className="informations">
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
        <div className="coluna-info">
          <p>Data: </p>
          <p>Hora: </p>
        </div>
      </div>
    </div>
  </div>
);

export default ResultsRevision;
