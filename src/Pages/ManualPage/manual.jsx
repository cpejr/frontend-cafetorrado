/*eslint-disable*/
import { React, useState } from 'react';
import Chronometer from '../../components/Chronometer/Chronometer';
import MainGraph from '../../components/MainGraph/MainGraph';
import ButtonController1 from '../../components/Buttons/ButtonsControllers/ButtonController1';
import ButtonController2 from '../../components/Buttons/ButtonsControllers/ButtonController2';
import ButtonAdjustment from '../../components/Buttons/ButtonsAdjustments/ButtonAdjustment';
import { socket } from '../../index';
import './Manual.css';

function Manual() {
  const [graphData, setGraphData] = useState({
    waterTemp: 0,
    ROR: 0,
    fireTemp: 0,
    pressure: 0,
    speed: 0,
    grainyness: 0,
  });
  socket.on('newData', (data) => { setGraphData(data) });

  // socket.on('buttonData', (data) => {
  //   console.log(data);
  // });
  return (
    <div className="tela-container">
      <div className="upper-part">
        <p className="history-graph-title">HISTÓRICO DE TEMPERATURA</p>
        <MainGraph />
      </div>
      <div className="lower-part">
        <div className="status-bar">
          <p className="status-title">STATUS DA TORRA</p>
          <p>Tmperatura da água:{graphData.waterTemp}</p>
          <p>Granulosidade: {graphData.grainyness}</p>
          <p>ROR: {graphData.ROR}</p>
        </div>
        <div className="control-buttons">
          <p className="buttons-title">CONTROLES</p>
          <div className="buttons">
            <div className="button1">
              <p>Mexedor</p>
              <ButtonController1 />
            </div>
            <div className="button2">
              <p>Resfriador</p>
              <ButtonController2 />
            </div>
          </div>
        </div>
        <div className="time-chronometer">
          <p className="time-title">TEMPO DE TORRA</p>
          <Chronometer />
        </div>
        <div className="adjustments">
          <p className="adjustments-title">AJUSTES</p>
          <div className="adjustments-buttons">
            <div className="rotation">
              <ButtonAdjustment />
              <p>Rotação do Tambor</p>
            </div>
            <div className="air">
              <ButtonAdjustment />
              <p>Velocidade do Ar</p>
            </div>
            <div className="flame">
              <ButtonAdjustment />
              <p>Intensidade da chama</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manual;
