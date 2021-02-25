/* eslint-disable */
import { React, useEffect, useState }  from "react";
import { render } from "react-dom";
import { Knob, Value } from "react-rotary-knob";
import * as skins from 'react-rotary-knob-skin-pack';
import { socket } from '../../../index'


function ButtonAdjustment(){
  const [buttonValue, setButtonValue] = useState(0)
  const [skinButton, setSkinButton] = useState(skins.s12)

  const knobstyle = {
    width: "80px",
    height: "80px"
  };
  function sendData(){socket.emit('dataFromButton', (Math.round(buttonValue*100)/100000))}
  function changeValue(val) {setButtonValue(val)}
    return(
    <div>
      <Knob id = "myKnob" 
      onChange={changeValue}
      style = {knobstyle} 
      rotateDegrees = {-135}
      clampMin = {0}
      clampMax = {270}
      onEnd= {sendData}
      min={0} max={1000} 
      value={buttonValue} 
      preciseMode = {false}
      skin={skinButton}/>
    </div>
    )
  }


export default ButtonAdjustment;