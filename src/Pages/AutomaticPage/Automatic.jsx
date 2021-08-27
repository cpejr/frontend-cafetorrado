import { React, useState } from 'react';
import { GiHand } from 'react-icons/gi';
import { useHistory } from 'react-router-dom';
import Chronometer from '../../components/Chronometer/Chronometer';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import ButtonController1 from '../../components/Buttons/ButtonsControllers/ButtonController1';
import ButtonController2 from '../../components/Buttons/ButtonsControllers/ButtonController2';
import ButtonController3 from '../../components/Buttons/ButtonsControllers/ButtonController3';
import './Automatic.css';
import RealData from '../../components/Functions/DataHandler/DataHandler';
import Loader from '../../components/Loader/loader';
import { sendESPData } from '../../components/Functions/RequestHandler/RequestHandler';

function Automatic() {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [colorMixer, setColorMixer] = useState('#202020');
  const history = useHistory();
  const changeColorMixer = () => {
    if (colorMixer === '#202020') {
      setColorMixer('#0029FF');
    } else setColorMixer('#202020');
  };
  return (
    <div className="tela-container">
      <div className="upper-part">
        <Loader status={loaderStatus} />
        <MainGraph setter={setLoaderStatus} />
      </div>
      <div className="lower-part">

        <div className="control-buttons">

          <div className="buttons">
            <div className="button4">
              <p>Manual</p>
              <button
                className="power-1"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  changeColorMixer();
                  sendESPData({ MdlModReq: 1 });
                  history.push('/Manual');
                }}
              >
                <GiHand size={35} />
              </button>
            </div>
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
