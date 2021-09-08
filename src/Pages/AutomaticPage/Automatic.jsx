import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Chronometer from '../../components/Chronometer/Chronometer';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import ButtonController1 from '../../components/Buttons/ButtonsControllers/ButtonController1';
import ButtonController2 from '../../components/Buttons/ButtonsControllers/ButtonController2';
import ButtonController3 from '../../components/Buttons/ButtonsControllers/ButtonController3';
import ButtonRouter from '../../components/Buttons/ButtonsRouter/ButtonRouter';
import './Automatic.css';
import RealData from '../../components/Functions/DataHandler/DataHandler';
import Loader from '../../components/Loader/loader';
import { socket } from '../../index';

function Automatic() {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [status, setStatus] = useState(false);
  return (
    <div className="tela-container">
      <div className="upper-part">
        <Loader status={loaderStatus} />
        <MainGraph setter={setLoaderStatus} />
      </div>
      <div className="lower-part">

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
        <div className="informations">
          <RealData />
        </div>
      </div>
    </div>
  );
}

export default Automatic;
