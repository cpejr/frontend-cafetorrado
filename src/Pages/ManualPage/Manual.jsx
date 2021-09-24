import { React, useEffect, useState } from 'react';
import Chronometer from '../../components/Chronometer/Chronometer';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import ButtonController1 from '../../components/Buttons/ButtonsControllers/ButtonController1';
import ButtonController2 from '../../components/Buttons/ButtonsControllers/ButtonController2';
import ButtonController3 from '../../components/Buttons/ButtonsControllers/ButtonController3';
import ButtonAdjustment from '../../components/Buttons/ButtonsAdjustments/ButtonAdjustment';
import Loader from '../../components/Loader/loader';
import { sendESPData } from '../../components/Functions/RequestHandler/RequestHandler';
import './Manual.css';

function Manual() {
  const [loaderStatus, setLoaderStatus] = useState(false);
  return (
    <div className="tela-container">
      <div className="title">
        <p> Modo Manual </p>
      </div>
      <div className="upper-part">
        <Loader status={loaderStatus} />
        <MainGraph />
      </div>
      <div className="lower-part">
        {/* } <RealData /> */}
        <div className="control-buttons">
          <div className="buttons">
            <div className="button1">
              <p className="fontColor">Mexedor</p>
              <ButtonController1 />
            </div>
            <div className="button2">
              <p className="fontColor">Resfriador</p>
              <ButtonController2 />
            </div>
            <div className="button3">
              <p className="fontColor">Crack</p>
              <ButtonController3 />
            </div>
          </div>
        </div>
        <div className="time-chronometer">
          <Chronometer setter={setLoaderStatus} />
        </div>
        <div className="adjustments">
          <div className="adjustments-buttons">
            <div className="rotation">
              <ButtonAdjustment name="MdlManCdr" />
              <p className="fontColor">Rotação do Tambor</p>
            </div>
            <div className="air">
              <ButtonAdjustment name="MdlManCar" />
              <p className="fontColor">Velocidade do Ar</p>
            </div>
            <div className="flame">
              <ButtonAdjustment name="MdlManInj" />
              <p className="fontColor">Intensidade da chama</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manual;
