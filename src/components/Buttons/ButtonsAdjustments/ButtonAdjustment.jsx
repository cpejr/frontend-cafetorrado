import { React, useEffect, useState } from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line
import { Knob, Value } from 'react-rotary-knob';
import * as skins from 'react-rotary-knob-skin-pack';
import { socket } from '../../../index';

function ButtonAdjustment({
  // eslint-disable-next-line
  buttonValue, setButtonValue, skinButton, setSkinButton, emitName, changeValue, maxValue = 1000,
}) {
  const knobstyle = {
    width: '120px',
    height: '120px',
  };
  function sendData() {
    // eslint-disable-next-line
    socket.emit(emitName, (Math.round(buttonValue * 100 / 1000) / 100));
  }

  return (
    <div>
      <Knob
        id="myKnob"
        onChange={changeValue}
        style={knobstyle}
        rotateDegrees={-135}
        clampMin={0}
        clampMax={270}
        onEnd={sendData}
        min={0}
        max={maxValue}
        value={buttonValue}
        preciseMode={false}
        skin={skinButton}
      />
    </div>
  );
}

export default ButtonAdjustment;
