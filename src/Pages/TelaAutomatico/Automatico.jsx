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

  //<div className={state? 'telaContainer' : 'telaContainerLarge'} >
  
  return (
    <div className="telaContainer" >
      <div className="parteSuperior">
        <h1 className="historyGraphTitle">HISTÓRICO DE TEMPERATURA</h1>
        <MainGraph />
      </div>

      <div className="parteInferior">
        <div className="statusBar">
          <p className="statusTitle">STATUS DA TORRA</p>
          <p>Temperatura: 160°C</p>
          <p>Pressão: 7,4atm </p>
          <p>ROR: 20</p>
        </div>
        <div className="controlButtons">
          <p className="buttonsTitle">CONTROLES</p>
          <div className="botoes">
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
        <div className="timeChronometer">
          <p className="timeTitle">TEMPO DE TORRA</p>
          <Chronometer />
        </div>
        <div className="informations">
          <p className="informationsTitle">OUTRAS INFORMAÇÕES</p>
          <p>Pressão: 7,4 atm </p>
          <p>Umidade: 30% </p>
          <p>Massa de Grãos: 470g </p>
        </div>
      </div>
    </div>
  );
}

export default Automatico;
