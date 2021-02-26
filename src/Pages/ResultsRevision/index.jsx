import React, { useState, useEffect } from 'react';
import './styles.css';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import CloseIcon from '@material-ui/icons/Close';
import RevisionGraph from '../../components/RevisionGraph';
import {
  fakeData,
  pointFormatter,
  filterData,
} from '../../components/RevisionGraph/dataManager';

const ResultsRevision = () => {
  const [loading, setLoading] = useState(true);
  const [dataChart, setDataChart] = useState({
    temperature: [],
    velocity: [],
    ror: [],
    humidity: [],
    pressure: [],
  });

  useEffect(() => {
    fakeData
      .get({ samples: 2000 })
      .then((data) => {
        setDataChart(filterData(data, { maxData: 150 }));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <div className="content">
        <h1>Carregando</h1>
      </div>
    );
  }

  return (
    <div className="content">
      <div className="save-name">
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
        <RevisionGraph dataChart={dataChart} />
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
};

export default ResultsRevision;
