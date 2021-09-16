/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './styles.css';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import CloseIcon from '@material-ui/icons/Close';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import { deleteLastRoast } from '../../components/Functions/RequestHandler/RequestHandler';
import getChartParams from '../../components/Functions/getChartParams';
import { set } from 'date-fns/esm';

const MAX_MARKS = 5;
export const ResultsRevision = () => {

// Guarda os valores digitados nos inputs
const [mark, setMark] = useState([]);
const [maxMark, setMaxMark] = useState(false);
const [markAnnotation, setMarkAnnotations] = useState([]);


useEffect(() => {
  if (mark.length > MAX_MARKS) { setMaxMark(true); } 
  // Mensagem de limite máximo de marcadores atingido
  if(maxMark === true) { alert("Número máximo de marcadores está limitado em 5"); }
}, [mark]);

useEffect((e) => { 
  const aux = [];

  if (mark) {
    aux.push(e);
  }
  setMarkAnnotations((prev) => [...prev, ...aux]); // guarda as string no vetor markAnnotations
}, [mark]);

const handleInput = (e) => {
  // requisição do backend
  setMark(e.target.value)
  console.log("ksksksksks");
};

  return(
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
            <div className="Mark">
              <input placeholder="Mark 1" type="text" value={ mark[0] } onChange={(e)=>handleInput} />
              <input placeholder="Mark 2" type="text" value={ mark[1] } onChange={(e)=>handleInput} />
              <input placeholder="Mark 3" type="text" value={ mark[2] } onChange={(e)=>handleInput} />
              <input placeholder="Mark 4" type="text" value={ mark[3] } onChange={(e)=>handleInput} />
              <input placeholder="Mark 5" type="text" value={ mark[4] } onChange={(e)=>handleInput} />
            </div>
          </div>
        </div>
        <div className="save-name">
        {/* <input type="text" name="name" /> */}
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
      </div>
    </div>
  );
}

export default ResultsRevision;
