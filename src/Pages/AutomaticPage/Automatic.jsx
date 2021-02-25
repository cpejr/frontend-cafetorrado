/* eslint-disable */
import { React, useEffect, useState, useRef } from "react";
import { FaPowerOff } from "react-icons/fa";
import Chronometer from "../../components/Chronometer/Chronometer";
import BarsGraph from "../../components/BarsGraph/BarsGraph";
import MainGraph from "../../components/MainGraph/MainGraph";
import ButtonController1 from "../../components/Buttons/ButtonsControllers/ButtonController1";
import ButtonController2 from "../../components/Buttons/ButtonsControllers/ButtonController2";
import { socket } from '../../index';
import "./Automatic.css";
// <BarsGraph />

function Automatic() {
  //<div className={state? 'telaContainer' : 'telaContainerLarge'} >
  const [graphData, setGraphData] = useState({
    waterTemp: 0,
    ROR: 0,
    fireTemp: 0,
    pressure: 0,
    speed: 0,
    grainyness: 0,
  });
  useEffect(() =>{
    socket.on('newData', (data) => {setGraphData(data)})  
  },[])
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
          </div>
        </div>
        <div className="time-chronometer">
          <Chronometer />
        </div>
        <div className="informations">
          <p>Pressão:{graphData.waterTemp}</p>
          <p>Temperatura: {graphData.grainyness}</p>
          <p>ROR: {graphData.ROR}</p>
          
        </div>  
      </div>
    </div>
  );
}

export default Automatic;
