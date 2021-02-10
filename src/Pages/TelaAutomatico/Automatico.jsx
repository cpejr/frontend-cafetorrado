import React from 'react';
import Chronometer from '../../components/Chronometer/Chronometer';
import BarsGraph from '../../components/BarsGraph/BarsGraph';
import './Automatico.css';

function Automatico() {
  return (
    <div className="telaContainer">
      <div className="parteSuperior">
        <h1 className="historyGraph">HISTÓRICO DE TEMPERATURA</h1>
      </div>

      <div className="parteInferior">
        <div className="statusBar">
          <h1 className="status">STATUS DA TORRA</h1>
          <BarsGraph />
        </div>
        <div className="timeChronometer">
          <h1 className="time">TEMPO DE TORRA</h1>
          <Chronometer />
        </div>
        <div className="informations">
          <h1 className="informationsTitle">OUTRAS INFORMAÇÕES</h1>
          <h1>Pressão: </h1>
          <h1>Umidade: </h1>
          <h1>Massa de Grãos: </h1>
        </div>
      </div>
    </div>
  );
}

export default Automatico;
