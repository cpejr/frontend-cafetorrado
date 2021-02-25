/* eslint-disable */
import { React, useState }  from "react";
import { render } from "react-dom";
import { Knob, Value } from "react-rotary-knob";
import { UseDebounce } from "../../Debounce/UseDebounce"
import * as skins from 'react-rotary-knob-skin-pack';
import { debounce } from "lodash-es";
import { socket } from '../../../index'


function ButtonAdjustment(){
  const [state, setState] = useState({value: 0})
  function changeValue(val) {
    setState({ value:val })
  }
  const debouncedFunction = UseDebounce(value => {
    console.log(value)
    changeValue.bind(this)
  }, 300);
    return(
    <div>
      {state.value}
      <Knob id = "myKnob" 
      onChange={ev => debouncedFunction(ev.bind.value)} 
      min={0} max={1000} 
      value={state.value} 
      skin={skins.s12}/>
    </div>
    )
  }


export default ButtonAdjustment;