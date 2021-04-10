import { React, useEffect, useState } from 'react';
import * as skins from 'react-rotary-knob-skin-pack';
import Chronometer from '../../components/Chronometer/Chronometer';
import MainGraph from '../../components/MainGraph/MainGraph';
import ButtonController1 from '../../components/Buttons/ButtonsControllers/ButtonController1';
import ButtonController2 from '../../components/Buttons/ButtonsControllers/ButtonController2';
import ButtonController3 from '../../components/Buttons/ButtonsControllers/ButtonController3';
import ButtonAdjustment from '../../components/Buttons/ButtonsAdjustments/ButtonAdjustment';
import { socket } from '../../index';
import './Manual.css';

function Manual() {
  const [buttonValue1, setButtonValue1] = useState(0);
  const [buttonValue2, setButtonValue2] = useState(0);
  const [buttonValue3, setButtonValue3] = useState(0);

  const [skinButton1, setSkinButton1] = useState(skins.s12);
  const [skinButton2, setSkinButton2] = useState(skins.s12);
  const [skinButton3, setSkinButton3] = useState(skins.s12);

  function changeValue1(val) {
    if (Math.abs(val - buttonValue1) < 200) { setButtonValue1(val); }
  }

  function changeValue2(val) {
    if (Math.abs(val - buttonValue2) < 200) { setButtonValue2(val); }
  }

  function changeValue3(val) {
    if (Math.abs(val - buttonValue3) < 200) { setButtonValue3(val); }
  }

  const graphData = {
    waterTemp: 0,
    ROR: 0,
    fireTemp: 0,
    pressure: 0,
    speed: 0,
    grainyness: 0,
  };

  useEffect(() => {
    socket.on('newData', (data) => {
      $.extend(graphData, data);
    });
  }, []);
  return (
    <div className="tela-container">
      <div className="upper-part">
        <MainGraph />
      </div>
      <div className="lower-part">
        <div className="status-bar">
          <p>
            Temperatura da água:
            {graphData.waterTemp}
          </p>
          <p>
            Granulosidade:
            {' '}
            {graphData.grainyness}
          </p>
          <p>
            ROR:
            {' '}
            {graphData.ROR}
          </p>
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
              <ButtonAdjustment buttonValue={buttonValue1} setButtonValue={setButtonValue1} skinButton={skinButton1} setSkinButton={setSkinButton1} emitName="dataFromButton" changeValue={changeValue1} maxValue={500} />
              <p>Rotação do Tambor</p>
            </div>
            <div className="air">
              <ButtonAdjustment buttonValue={buttonValue2} setButtonValue={setButtonValue2} skinButton={skinButton2} setSkinButton={setSkinButton2} emitName="dataFromButton" changeValue={changeValue2} maxValue={100} />
              <p>Velocidade do Ar</p>
            </div>
            <div className="flame">
              <ButtonAdjustment buttonValue={buttonValue3} setButtonValue={setButtonValue3} skinButton={skinButton3} setSkinButton={setSkinButton3} emitName="dataFromButton" changeValue={changeValue3} maxValue={50} />
              <p>Intensidade da chama</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manual;
