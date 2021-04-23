import React, { useState, useRef } from 'react';
import './Modal.css';
import { VscChromeClose } from 'react-icons/vsc';
/*eslint-disable */
export const Modal = ({ open, setOpen }) => {
  const [hidden, setHidden] = useState(false);
  const [wifiNewName, setWifiNewName] = useState('');
  const wifiNNRef = useRef();
  const [password, setPassword] = useState('');
  const passRef = useRef();
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const passConfRef = useRef();
  const wifiName = 'Nome do wifi aqui';

  const outlineInput = ({ refs }) => {
    for(const key in refs){
        if(refs[key]) { refs[key].current.style.border = "10px solid red"}
    }
  };
  const changeWifi = (event) => {
    event.preventDefault();
    if (wifiNewName && password && passwordConfirmation){ return }
    else{
        outlineInput({
            refs: [
            wifiNewName ? null : wifiNNRef,
            password ? null : passRef,
            passwordConfirmation ? null : passConfRef
            ]});
    }
  };

  return (
  /* eslint-disable */
  <div className="start-hidden" style={{display: open? 'flex' : 'none'}} onClick = {() => {setOpen(false)}}>

        <div className = 'modal-content'onClick={e => { e.stopPropagation();}}>
        <p> Configurações do wi-fi</p>
        <VscChromeClose size = {25} onClick= {()=> {setOpen(false)}} className='icon-close' />
        <hr />

        <form onSubmit ={changeWifi}>

            <div className="wifi-name">
                <label htmlFor="wifiname"> Digite o novo nome do wi-fi: </label>
                <input type="text" id="wifiname" name="wifiname" ref = {wifiNNRef}value={wifiNewName} onChange={(e) => {setWifiNewName(e.target.value)}} />
            </div>

            <p> O nome atual da rede wi-fi é: "{wifiName}" </p>

            <div className="wifi-password">
                <label htmlFor="wifipassword"> Digite a nova senha:</label>
                <input type="password" id="wifipassword" name="wifipassword" ref={passRef} value ={password} onChange={(e)=> {setPassword(e.target.value)}}/>
            </div>

            <div className="wifi-password-confirmation">
                <label htmlFor="wifipasswordconfirmation"> Confirme a nova senha:</label>
                <input type="password" id="wifipassword" name="wifipasswordconfirmation" ref = {passConfRef} value={passwordConfirmation} onChange={(e) => {setPasswordConfirmation(e.target.value)}} />
            </div>

            <div className="checkbox">
                <p>Deseja esconder seu wi-fi? </p>
                <div>
                    <label className="switch">
                    <input type="checkbox" checked={hidden} onClick={()=>{setHidden(!hidden)}}/>
                    <span className="slider round" />
                </label>
            </div>
            </div>
            <p id="text-wifi-hidden">
            Isto fará com que seu wi-fi fique invisível á todos, sendo necessário insirir a rede
            manualmente em seu Tablet.
            </p>
            <button type='submit'> Confirmar </button>

        </form>
        </div>

  </div>
  )};
