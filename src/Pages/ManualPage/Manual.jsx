import { React, useState } from 'react';
import Chronometer from '../../components/Chronometer/Chronometer';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import ButtonController1 from '../../components/Buttons/ButtonsControllers/ButtonController1';
import ButtonController2 from '../../components/Buttons/ButtonsControllers/ButtonController2';
import ButtonController3 from '../../components/Buttons/ButtonsControllers/ButtonController3';
import ButtonController4 from '../../components/Buttons/ButtonsControllers/ButtonsController4';
import ButtonAdjustment from '../../components/Buttons/ButtonsAdjustments/ButtonAdjustment';
import Loader from '../../components/Loader/loader';
import './Manual.css';

function Manual() {
  const [loaderStatus, setLoaderStatus] = useState(false);
  return (
    <div className="tela-container">
      <div className="title">
        Modo Manual
      </div>
      <div className="upper-part">
        <Loader status={loaderStatus} />
        <MainGraph />
      </div>
      <div className="lower-part">
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
            <div className="button4">
              <p>Marcador</p>
              <ButtonController4 />
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
              <p>Rotação do Tambor</p>
            </div>
            <div className="air">
              <ButtonAdjustment name="MdlManCar" />
              <p>Velocidade do Ar</p>
            </div>
            <div className="flame">
              <ButtonAdjustment name="MdlManInj" />
              <p>Intensidade da chama</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manual;
