import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getServerData, disconnectData, sendESPData } from '../Functions/RequestHandler/RequestHandler';
import { socket } from '../../index';
import { useGlobalContext } from '../../Context/GlobalContext';

import './Chronometer.css';

function Chronometer({ setter }) {
  const { marksGraph, setter: setMarks } = useGlobalContext();
  const history = useHistory();
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const updateChrono = (data) => {
    setSecond((parseInt(((data / 300) % 1) * 60, 10)));
    setMinute(Math.trunc(data / 300));
  };
  socket.on('realData', (data) => { updateChrono(data.fields.MdlRunCnt); });
  return (
    <div className="chronometer-container">
      <div id="buttons">
        <button id="change" type="button" onClick={() => { getServerData(); setter(true); }}>
          Iniciar
        </button>
        <button
          id="change"
          type="button"
          onClick={() => {
            sendESPData({ ItfModReq: 7 });
            disconnectData();
            history.push({ pathname: '/ResultsRevision' });
          }}
        >
          Review
        </button>
      </div>
      <div id="chronometer">
        <span id="minutes">{minute.toLocaleString(undefined, { minimumIntegerDigits: 2 })}</span>
        <span>:</span>
        <span id="seconds">{second.toLocaleString(undefined, { minimumIntegerDigits: 2 })}</span>
      </div>
      <table id="log" />
    </div>
  );
}

export default Chronometer;
