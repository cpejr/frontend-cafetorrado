import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getServerData, disconnectData } from '../Functions/RequestHandler/RequestHandler';

import './Chronometer.css';

function Chronometer() {
  const history = useHistory();
  const [time, setTime] = useState({ minute: 0, second: 0 });

  function addSecond() {
    var mySecond = time.second;
    var myMinute = time.minute;

    mySecond++;
    if (mySecond > 59) {
      myMinute++;
      mySecond = 0;
    }
    setTime({ minute: myMinute, second: mySecond });
  }

  function startChronometer() {
    setInterval(addSecond, 1000);
  }

  return (
    <div className="chronometer-container">
      <div id="buttons">
        <button id="change" type="button" onClick={getServerData}>
          Start
        </button>
        <button id="change" type="button" onClick={() => { disconnectData; history.push('/ResultsRevision'); }}>
          Finish
        </button>
      </div>
      <div id="chronometer">
        <span id="minutes">00</span>
        <span>:</span>
        <span id="seconds">00</span>
      </div>
      <table id="log" />
    </div>
  );
}

export default Chronometer;
