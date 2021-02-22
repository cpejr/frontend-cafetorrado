/* eslint-disable */
import React from "react";
import { render } from "react-dom";
import { Knob } from "react-rotary-knob";
import * as skins from 'react-rotary-knob-skin-pack';


const knobstyle = {
    width: "120px",
    height: "110px"
  };

function ButtonAdjustment(){
    return (
      <Knob style={knobstyle} skin={skins.s12} />
    );
}

export default ButtonAdjustment;