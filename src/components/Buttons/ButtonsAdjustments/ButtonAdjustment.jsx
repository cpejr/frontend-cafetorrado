/* eslint-disable react/jsx-no-bind */
import { React, useEffect, useState } from 'react';
// eslint-disable-next-line
import { Knob, Value } from 'react-rotary-knob';
import * as skins from 'react-rotary-knob-skin-pack';
import useDebounce from '../../Functions/useDebounce';
import { sendESPData } from '../../Functions/RequestHandler/RequestHandler';

function ButtonAdjustment({ name, initialValue }) {
  const [buttonValue, setButtonValue] = useState(initialValue || 0);
  const debouncedButtonValue = useDebounce(buttonValue, 200);

  const flameControl = (value) => !(value === 0);

  useEffect(() => {
    if (name === 'MdlManInj') {
      sendESPData({ MdlIgnAcv: flameControl(debouncedButtonValue) });
    }
    sendESPData({ [name]: debouncedButtonValue });
  }, [debouncedButtonValue]);

  function changeValue(val) {
    if (Math.abs(val - buttonValue) < 40) { setButtonValue(Math.round(val)); }
  }

  const knobstyle = {
    width: '120px',
    height: '120px',
  };

  return (
    <div>
      <Knob
        id={name}
        onChange={changeValue}
        debounceTimeout={200}
        value={buttonValue}
        style={knobstyle}
        rotateDegrees={-135}
        clampMin={0}
        clampMax={270}
        min={0}
        max={100}
        precisionMode
        unlockDistance={80}
        skin={skins.s12}
      />
    </div>
  );
}

export default ButtonAdjustment;
