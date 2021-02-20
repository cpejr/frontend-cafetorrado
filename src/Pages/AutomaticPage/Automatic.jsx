/* eslint-disable */
import { React, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import Chronometer from '../../components/Chronometer/Chronometer';
import BarsGraph from '../../components/BarsGraph/BarsGraph';
import MainGraph from '../../components/MainGraph/MainGraph';
import ButtonController1 from '../../components/Buttons/ButtonsControllers/ButtonController1';
import ButtonController2 from '../../components/Buttons/ButtonsControllers/ButtonController2';

import './Automatic.css';

// <BarsGraph />
function Automatic() {
  //<div className={state? 'telaContainer' : 'telaContainerLarge'} >

  return (
    <div className="tela-container">
      <div className="upper-part">
        <p className="history-graph-title">HISTÓRICO DE TEMPERATURA</p>
        <MainGraph />
      </div>
      <div className="lower-part">
        <div className="status-bar">
          <p className="status-title">STATUS DA TORRA</p>
          <p>Temperatura: 160°C</p>
          <p>Pressão: 7,4atm </p>
          <p>ROR: 20</p>
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
        <div className="informations">
          <p className="informations-title">OUTRAS INFORMAÇÕES</p>
          <p>Pressão: 7,4 atm </p>
          <p>Umidade: 30% </p>
          <p>Massa de Grãos: 470g </p>
        </div>
      </div>
    </div>
  );
}

export default Automatic;
