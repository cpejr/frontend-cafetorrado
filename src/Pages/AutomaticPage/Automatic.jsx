/* eslint-disable */
import { React } from "react";
import Chronometer from "../../components/Chronometer/Chronometer";
import MainGraph from "../../components/MainGraph/MainGraph";
import ButtonController1 from "../../components/Buttons/ButtonsControllers/ButtonController1";
import ButtonController2 from "../../components/Buttons/ButtonsControllers/ButtonController2";
import ButtonController3 from "../../components/Buttons/ButtonsControllers/ButtonController3";
import ButtonRouter from "../../components/Buttons/ButtonsRouter/ButtonRouter";
import { socket } from '../../index';
import "./Automatic.css";
import RealData from '../../DataHandler/DataHandler'
import { useHistory } from 'react-router-dom';

function Automatic() {
  console.log('x')
  return (
    <div className="tela-container" >
      <div className="upper-part">
        <MainGraph />        
      </div>
      <div className="lower-part">
        {/* <div className="status-bar">
          
          <p>Temperatura: 160°C</p>
          <p>Pressão: 7,4atm </p>
          <p>ROR: 20</p>
         
        </div> */}

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
        <div className = 'informations'>
          <RealData />
        </div>
      </div>
    </div>
  );
}

export default Automatic;
