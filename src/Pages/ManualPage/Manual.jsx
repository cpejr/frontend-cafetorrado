import { React, useEffect, useState } from 'react';
import Chronometer from '../../components/Chronometer/Chronometer';
import MainGraph from '../../components/MainGraph/MainGraph';
import ButtonController1 from '../../components/Buttons/ButtonsControllers/ButtonController1';
import ButtonController2 from '../../components/Buttons/ButtonsControllers/ButtonController2';
import ButtonController3 from '../../components/Buttons/ButtonsControllers/ButtonController3';
import ButtonAdjustment from '../../components/Buttons/ButtonsAdjustments/ButtonAdjustment';
import { sendESPData } from '../../components/Functions/RequestHandler/RequestHandler';
import './Manual.css';

function Manual() {
  const [buttonROR, setButtonROR] = useState(0);
  const [buttonAir, setButtonAir] = useState(0);
  const [buttonFlame, setButtonFlame] = useState(0);

  function changeValue1(val) {
    if (Math.abs(val - buttonROR) < 60) { setButtonROR(val); }
  }

  function changeValue2(val) {
    if (Math.abs(val - buttonAir) < 60) { setButtonAir(val); }
  }

  function changeValue3(val) {
    if (Math.abs(val - buttonFlame) < 60) { setButtonFlame(val); }
  }

  return (
    <div className="tela-container">
      <div className="upper-part">
        <MainGraph />
      </div>
      <div className="lower-part">
        <div className="status-bar">
          <p>
            Temperatura da água:
          </p>
          <p>
            Granulosidade:
            {' '}
          </p>
          <p>
            ROR:
            {' '}
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
              <ButtonAdjustment
                name="ror"
                buttonValue={buttonROR}
                data={{ MdlManCdr: Math.round(buttonROR) }}
                setButtonValue={setButtonROR}
                changeValue={changeValue1}
                maxValue={100}
              />
              <p>Rotação do Tambor</p>
            </div>
            <div className="air">
              <ButtonAdjustment
                name="air"
                buttonValue={buttonAir}
                data={{ MdlManCar: Math.round(buttonAir) }}
                setButtonValue={setButtonAir}
                changeValue={changeValue2}
                maxValue={100}
              />
              <p>Velocidade do Ar</p>
            </div>
            <div className="flame">
              <ButtonAdjustment
                name="flame"
                buttonValue={buttonFlame}
                data={{ MdlManInj: Math.round(buttonFlame) }}
                setButtonValue={setButtonFlame}
                changeValue={changeValue3}
                maxValue={100}
              />
              <p>Intensidade da chama</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manual;
