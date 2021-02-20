import React, { useState } from 'react';

import './Chronometer.css';

function Chronometer() {
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
        <button id="change" type="button">
          Start / Stop
        </button>
        <button id="init" type="button">
          Reset
        </button>
      </div>
      <div id="chronometer">
        <span id="minutes">00</span>
        <span>:</span>
        <span id="seconds">00</span>
        <span>:</span>
        <span id="thousands">0.00</span>
      </div>
      <table id="log" />
    </div>
  );
}

export default Chronometer;
