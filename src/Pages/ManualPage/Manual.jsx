/* eslint-disable */
import { React, useEffect, useState } from 'react';
import Chronometer from '../../components/Chronometer/Chronometer';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import ButtonController1 from '../../components/Buttons/ButtonsControllers/ButtonController1';
import ButtonController2 from '../../components/Buttons/ButtonsControllers/ButtonController2';
import ButtonController3 from '../../components/Buttons/ButtonsControllers/ButtonController3';
import ButtonController4 from '../../components/Buttons/ButtonsControllers/ButtonController4';
import ButtonAdjustment from '../../components/Buttons/ButtonsAdjustments/ButtonAdjustment';
import Loader from '../../components/Loader/loader';

import './Manual.css';

function Manual({location}) {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [arrayAnnotation, setArrayAnnotation] = useState([]);

  return (
    <div className="tela-container">
      <div className="upper-part">
        <Loader status={loaderStatus} />
        <MainGraph setter={setLoaderStatus} setArrayAnnotation={setArrayAnnotation}/>
      </div>
      <div className="lower-part">
        <div className="control-buttons">
          <div className="buttons">
            <div className="button">
              <p className="fontColor">Mexedor</p>
              <ButtonController1 />
            </div>
            <div className="button">
              <p className="fontColor">Resfriador</p>
              <ButtonController2 />
            </div>
            <div className="button">
              <p className="fontColor">Crack</p>
              <ButtonController3 />
            </div>
            <div className="button">
              <p className="fontColor">Marcador</p>
              <ButtonController4 />
            </div>
          </div>
        </div>
        <div className="time-chronometer">
          <Chronometer setter={setLoaderStatus}/>
        </div>
        <div className="adjustments">
          <div className="adjustments-buttons">
            <div className="rotation">
              <ButtonAdjustment name="MdlManCdr" initialValue={location?.state?.drumPct}/>
              <p className="fontColor">Rotação do Tambor</p>
            </div>
            <div className="air">
              <ButtonAdjustment name="MdlManCar" initialValue={location?.state?.airPct}/>
              <p className="fontColor">Velocidade do Ar</p>
            </div>
            <div className="flame">
              <ButtonAdjustment name="MdlManInj" initialValue={location?.state?.flamePct}/>
              <p className="fontColor">Intensidade da chama</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manual;
