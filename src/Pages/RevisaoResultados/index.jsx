import React from 'react';
import './styles.css';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import CloseIcon from '@material-ui/icons/Close';
import RevisaoGraph from '../../components/RevisaoGraph';
import data from './data';

const RevisaoResultados = () => {
  return (
    <div className="content">
      <div className="salvar-nome">
        <input type="text" name="name" />
        <button type="button">
          <AddToPhotosIcon /> Salvar
        </button>
        <button type="button">
          <CloseIcon />
          Excluir
        </button>
      </div>
      <div className="grafico">
        <RevisaoGraph data={data} />
      </div>
      <div className="informacoes">
        <h1>Informações</h1>
        <div className="colunas-info">
          <div className="coluna-info">
            <p>Temperatura mínima: </p>
            <p>Temperatura média: </p>
            <p>Temperatura máxima: </p>
          </div>
          <div className="coluna-info">
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
};

export default RevisaoResultados;
