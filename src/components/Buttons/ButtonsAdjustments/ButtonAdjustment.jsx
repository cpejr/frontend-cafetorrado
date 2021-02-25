/* eslint-disable */
import { React, useState }  from "react";
import { render } from "react-dom";
import { Knob, Value } from "react-rotary-knob";
import * as skins from 'react-rotary-knob-skin-pack';
import { socket } from '../../../index'


function ButtonAdjustment(){
  const [buttonValue, setButtonValue] = useState(0)
  const [skinButton, setSkinButton] = useState(skins.s11)
  const knobstyle = {
    width: "80px",
    height: "80px"
  };
        // const maxDistance = 200;
        // let distance = Math.abs(val - this.state.value);
        // if (distance > maxDistance) {
        //   return;
        // } else {
        //   this.setState({ value: val });
        // }
  function sendData(){socket.emit('dataFromButton', (buttonValue))}
  function changeValue(val) {
    setButtonValue(val)
  }
    return(
    <div>
      {buttonValue}
      <Knob id = "myKnob" 
      onChange={changeValue}
      style = {knobstyle} 
      rotateDegrees = {-135}
      clampMin = {0}
      clampMax = {270}
      onEnd= {sendData}
      min={0} max={1} 
      value={buttonValue} 
      preciseMode = {true}
      skin={skinButton}/>
    </div>
    )
  }


export default ButtonAdjustment;