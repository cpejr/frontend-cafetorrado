import React from 'react';
import Header from '../../components/Header/Header';
import Chronometer from '../../components/Chronometer/Chronometer';
import BarsGraph from '../../components/BarsGraph/BarsGraph';
import './Automatico.css';

function Automatico() {
  return (
    <div className="telaContainer">
      <Header />
      <h1 className="time">TEMPO DE TORRA</h1>
      <Chronometer />

      <div className="informations">
        <h1 className="informationsTitle">OUTRAS INFORMAÇÕES</h1>
        <h1>Pressão: </h1>
        <h1>Umidade: </h1>
        <h1>Massa de Grãos: </h1>
      </div>
      <h1 className="status">STATUS DA TORRA</h1>
      <BarsGraph />
    </div>
  );
}

export default Automatico;
