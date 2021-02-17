/*eslint-disable*/
import { React, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import Chronometer from '../../components/Chronometer/Chronometer';
import BarsGraph from '../../components/BarsGraph/BarsGraph';
import MainGraph from '../../components/MainGraph/MainGraph';
import ButtonController1 from '../../components/Buttons/ButtonController1';
import ButtonController2 from '../../components/Buttons/ButtonController2';

import './Automatico.css';

// <BarsGraph />
function Automatico() {
  return (
    <div className="telaContainer">
      <div className="parteSuperior">
        <h1 className="historyGraphTitle">HISTÓRICO DE TEMPERATURA</h1>
        <MainGraph />
      </div>

      <div className="parteInferior">
        <div className="statusBar">
          <h1 className="statusTitle">STATUS DA TORRA</h1>
          <h1>Temperatura: </h1>
          <h1>Pressão: </h1>
          <h1>ROR: </h1>
        </div>
        <div className="controlButtons">
          <h1 className="buttonsTitle">CONTROLES</h1>
          <div className="botoes">
            <div className="button1">
              <h1>Mexedor</h1>
              <ButtonController1 />
            </div>
            <div className="button2">
              <h1>Resfriador</h1>
              <ButtonController2 />
            </div>
          </div>
        </div>
        <div className="timeChronometer">
          <h1 className="timeTitle">TEMPO DE TORRA</h1>
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
