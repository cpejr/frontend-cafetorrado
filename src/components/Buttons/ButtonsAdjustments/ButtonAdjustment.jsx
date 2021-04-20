import { React, useEffect, useState } from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line
import { Knob, Value } from 'react-rotary-knob';
import * as skins from 'react-rotary-knob-skin-pack';
import { sendESPData } from '../../Functions/RequestHandler/RequestHandler';

function ButtonAdjustment({
  buttonValue, emitName, changeValue, maxValue = 1000, data, name,
}) {
  const knobstyle = {
    width: '120px',
    height: '120px',
  };

  return (
    <div>
      <Knob
        id={name}
        onChange={changeValue}
        style={knobstyle}
        rotateDegrees={-135}
        onEnd={() => { sendESPData(data); }}
        clampMin={0}
        clampMax={270}
        min={0}
        max={maxValue}
        value={buttonValue}
        preciseMode={false}
        skin={skins.s12}
      />
    </div>
  );
}

export default ButtonAdjustment;
