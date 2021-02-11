import React, { useState } from 'react';

import './Chronometer.css';

function Chronometer() {
  const [time, setTime] = useState({ minuto: 0, segundo: 0 });

  function addSecond() {
    var meuSegundo = time.segundo;
    var meuMinuto = time.minuto;

    meuSegundo++;
    if (meuSegundo > 59) {
      meuMinuto++;
      meuSegundo = 0;
    }
    setTime({ minuto: meuMinuto, segundo: meuSegundo });
  }

  function StartChronometer() {
    setInterval(addSecond, 1000);
  }

  return (
    <div className="chronometerContainer">
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
        <span id="thousandths">0.00</span>
      </div>
      <table id="log" />
    </div>
  );
}

export default Chronometer;
