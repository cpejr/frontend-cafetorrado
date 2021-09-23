import React, { useState, useEffect } from 'react';
import './styles.css';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import CloseIcon from '@material-ui/icons/Close';
import { set } from 'date-fns/esm';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import { deleteLastRoast } from '../../components/Functions/RequestHandler/RequestHandler';
import getChartParams from '../../components/Functions/getChartParams';
import { useGlobalContext } from '../../Context/GlobalContext';

export const ResultsRevision = () => {
  // Guarda os valores digitados nos inputs
  const MAX_MARKS = 5;
  const [mark, setMark] = useState([]); // strings dos marcadores
  const { marksGraph, setter } = useGlobalContext();

  const handleInput = (e) => {
    const annot = mark;

    console.log(e.target.name);
    // requisição do backend
    if (mark.length <= MAX_MARKS) {
      annot[e.target.name] = e.target.value;
      setMark([...annot]);
    }
  };

  useEffect(() => console.log(mark), [mark]);

  const { annotations } = window;

  useEffect(() => console.log({ annotations }), [{ annotations }]);

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
              <input className="Mark" name="0" placeholder="Marcador 1" type="text" value={mark[0]} onChange={handleInput} />
              <input className="Mark" name="1" placeholder="Marcador 2" type="text" value={mark[1]} onChange={handleInput} />
              <input className="Mark" name="2" placeholder="Marcador 3" type="text" value={mark[2]} onChange={handleInput} />
              <input className="Mark" name="3" placeholder="Marcador 4" type="text" value={mark[3]} onChange={handleInput} />
              <input className="Mark" name="4" placeholder="Marcador 5" type="text" value={mark[4]} onChange={handleInput} />
            </div>
            {/* <button style={{display: "flex", flexDirection:
            "column", marginTop: "10px"}} onClick={}> Salvar </button> */}
          </div>
        </div>
        <div className="save-name">
          {/* <input type="text" name="name" /> */}
          <button type="button" onClick={(e) => { e.preventDefault(); getChartParams(mark); }}>
            <AddToPhotosIcon />
            {' '}
            Salvar
          </button>
          <button type="button" onClick={deleteLastRoast}>
            <CloseIcon />
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsRevision;
