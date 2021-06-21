import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getServerData, disconnectData } from '../Functions/RequestHandler/RequestHandler';
import { socket } from '../../index';
import './Chronometer.css';

function Chronometer({ setter }) {
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
          Start
        </button>
        <button id="change" type="button" onClick={() => { disconnectData(); history.push('/ResultsRevision'); }}>
          Finish
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
