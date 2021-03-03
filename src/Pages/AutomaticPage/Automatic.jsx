/* eslint-disable */
import { React, useEffect, useState, useRef } from "react";
import { FaPowerOff } from "react-icons/fa";
import Chronometer from "../../components/Chronometer/Chronometer";
import BarsGraph from "../../components/BarsGraph/BarsGraph";
import MainGraph from "../../components/MainGraph/MainGraph";
import ButtonController1 from "../../components/Buttons/ButtonsControllers/ButtonController1";
import ButtonController2 from "../../components/Buttons/ButtonsControllers/ButtonController2";
import ButtonController3 from "../../components/Buttons/ButtonsControllers/ButtonController3";
import { socket } from '../../index';
import "./Automatic.css";

function Automatic() {
  //<div className={state? 'telaContainer' : 'telaContainerLarge'} >
  const graphData = {
    waterTemp: 0,
    ROR: 0,
    fireTemp: 0,
    pressure: 0,
    speed: 0,
    grainyness: 0,
  };
  useEffect(() =>{
    socket.on('newData', (data) => { $.extend(graphData, data)  })  
  },[])
  console.log('x');
  return (
    <div className="tela-container">
      <div className="upper-part">
        <MainGraph />        
      </div>
      <div className="lower-part">
        <div className="status-bar">
          
          <p>Temperatura: 160°C</p>
          <p>Pressão: 7,4atm </p>
          <p>ROR: 20</p>
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
        <div className="informations">
          {/* <p>Pressão:{graphData.waterTemp}</p>
          <p>Temperatura do Grão: {graphData.grainyness}</p>
          <p>Temperatura do Ar: {graphData.fireTemp}</p>
          <p>ROR: {graphData.ROR}</p> */}
          
        </div>  
      </div>
    </div>
  );
}

export default Automatic;
