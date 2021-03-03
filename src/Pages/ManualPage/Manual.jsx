/*eslint-disable*/
import { React, useEffect, useState } from 'react';
import Chronometer from '../../components/Chronometer/Chronometer';
import MainGraph from '../../components/MainGraph/MainGraph';
import ButtonController1 from '../../components/Buttons/ButtonsControllers/ButtonController1';
import ButtonController2 from '../../components/Buttons/ButtonsControllers/ButtonController2';
import ButtonController3 from '../../components/Buttons/ButtonsControllers/ButtonController3';
import ButtonAdjustment from '../../components/Buttons/ButtonsAdjustments/ButtonAdjustment';
import { socket } from '../../index';
import $ from 'jquery';
import './Manual.css';

function Manual() {
  // const graphData = {
  //   waterTemp: 0,
  //   ROR: 0,
  //   fireTemp: 0,
  //   pressure: 0,
  //   speed: 0,
  //   grainyness: 0,
  // };

  // useEffect(()=>{
  //   socket.on('newData', (data) => { 
  //     $.extend(graphData, data);
  //    });
  // }, [])
  return (
    <div className="tela-container">
      <div className="upper-part">
        <MainGraph />
      </div>
      <div className="lower-part">
        <div className="status-bar">  
          {/* <p>Temperatura da água:{graphData.waterTemp}</p>
          <p>Granulosidade: {graphData.grainyness}</p>
          <p>ROR: {graphData.ROR}</p> */}
        </div>
        <div className="control-buttons">
          <div className="buttons">
            <div className="button1">
              <p>Mexedor</p>
              <ButtonController1 />
            </div>
            <div className="button2">
              <p>Resfriador</p>
              <ButtonController2 />
            </div>
            <div className="button3">
              <p>Crack</p>
              <ButtonController3 />
            </div>
          </div>
        </div>
        <div className="time-chronometer">
          <Chronometer />
        </div>
        <div className="adjustments">
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
