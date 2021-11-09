import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import CloseIcon from '@material-ui/icons/Close';
import { set } from 'date-fns/esm';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Prompt } from 'react-router';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import { deleteLastRoast } from '../../components/Functions/RequestHandler/RequestHandler';
import getChartParams from '../../components/Functions/getChartParams';
import { useGlobalContext } from '../../Context/GlobalContext';

export const ResultsRevision = () => {
  const history = useHistory();
  const [isNull, setIsNull] = useState([]);
  // Guarda os valores digitados nos inputs
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

  const { annotations } = window;

  console.log(graphData);

  const calculateAverage = (index) => {
    const dataArray = graphData.datasets[index] ? graphData.datasets[index].data : [];

    let sum = 0;

    dataArray.forEach((value) => {
      sum += value;
    });

    return (sum / dataArray.length).toFixed(2);
  };

  return (
    <div className="content">

      <div className="graph_">
        <MainGraph />
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
                ? calculateAverage(1)
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
              { Math.max(...graphData.labels.map((label) => parseInt(label, 10)))}
              {' '}
              segundos
            </p>
            {/* <p>
              Pressão média:
              {' '}
              {graphData !== []
                ? calculateAverage(6)
                : 0}
              mbar
            </p>
            <p>
              Percentual médio de velocidade do tambor:
              {' '}
              {graphData !== []
                ? calculateAverage(7)
                : 0}
              %
            </p> */}
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
            {/* <button style={{display: "flex", flexDirection:
            "column", marginTop: "10px"}} onClick={}> Salvar </button> */}
          </div>
        </div>
        { /* eslint-disable */}
        {/* LIMPAR O ANNOTATIONS STATE DO CONTEXT API QUANDO O USUÁRIO SALVAR OU APAGAR A TORRA, IMPEDIR QUE O USUÁRIO MUDE DE TELA */}
        <div className="save-name">
          {/* em teoria o Prompt vai verificar se isNull!='NAO' é verdadeiro - ou seja, não clicou em salvar ou
          excluir ainda - se for true, vai exibir a mensagem antes de sair da página, NAO SEI SE FUNCIONA AINDA */}
          {/* <Prompt
            when={isNull != 'NAO'}
            message='Voce não salvou a torra, se não salvar ela será excluida, tem certeza que quer sair?'
          /> */}
          {/* <input type="text" name="name" /> */}
          <button type="button" onClick={handleSave}>
            <AddToPhotosIcon />
            {' '}
            Salvar
          </button>
          <button type="button" onClick={() => { deleteLastRoast(); setter([]); history.push('/') }}>
            <CloseIcon />
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsRevision;
