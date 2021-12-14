import { React, useState, useEffect } from 'react';
import { GiHand } from 'react-icons/gi';
import { useHistory } from 'react-router-dom';
import Chronometer from '../../components/Chronometer/Chronometer';
import { MainGraph } from '../../components/MainGraph/MainGraph';
import ButtonController1 from '../../components/Buttons/ButtonsControllers/ButtonController1';
import ButtonController2 from '../../components/Buttons/ButtonsControllers/ButtonController2';
import ButtonController3 from '../../components/Buttons/ButtonsControllers/ButtonController3';
import ButtonController4 from '../../components/Buttons/ButtonsControllers/ButtonController4';
import ButtonRouter from '../../components/Buttons/ButtonsRouter/ButtonRouter';
import './Automatic.css';
import RealData from '../../components/Functions/DataHandler/DataHandler';
import Loader from '../../components/Loader/loader';
import { sendESPData } from '../../components/Functions/RequestHandler/RequestHandler';

function Automatic() {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [colorMixer, setColorMixer] = useState('#202020');
  const [arrayAnnotation, setArrayAnnotation] = useState([]);
  const [uppData, setUppData] = useState({
    fields: {
      BlkBegDaq: 3435973836,
      BlkEndDaq: 3722304989,
      BlkNotTrc: '',
      BlkNt2Trc: '',
      MdlAirOut: 0,
      MdlAirScl: 0,
      MdlDisErr: 5,
      MdlDruOut: 0,
      MdlGraScl: 0,
      MdlInjOut: 0,
      MdlRunCnt: 27677,
      BchPrsScl: 0,
      BchHumScl: 0,
      BchTmpScl: 0,
    },
  });

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
        <MainGraph setter={setLoaderStatus} setArrayAnnotation={setArrayAnnotation} />
      </div>
      <div className="lower-part">

        <div className="control-buttons">

          <div className="buttons">
            <div className="button">
              <p className="fontColor">Manual</p>
              <button
                className="power-1"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  changeColorMixer();
                  sendESPData({ ItfModReq: 1 });
                  history.push('/Manual',
                    {
                      flamePct: uppData.fields.MdlInjOut,
                      drumPct: uppData.fields.MdlDruOut,
                      airPct: uppData.fields.MdlAirOut,
                    });
                }}
              >
                <GiHand size={35} />
              </button>
            </div>
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
          <Chronometer setter={setLoaderStatus} />
        </div>
        <div className="informations">
          <RealData uppData={uppData} setUppData={setUppData} />
        </div>
      </div>
    </div>
  );
}

export default Automatic;
