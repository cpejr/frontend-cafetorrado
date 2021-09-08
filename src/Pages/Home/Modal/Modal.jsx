import React, { useState, useRef } from 'react';
import './Modal.css';
import { VscChromeClose } from 'react-icons/vsc';
import { getWifiData, setWifiData } from '../../../components/Functions/RequestHandler/RequestHandler';

export const Modal = ({ open, setOpen }) => {
  const [done, isDone] = useState(false);
  const [oldName, setOldName] = useState('');
  const [hidden, setHidden] = useState(false);

  const setWifiName = async () => {
    setOldName(await (await getWifiData()).data.wifiData.Sid);
  };
  const setOldHidden = async () => {
    setHidden(await (await getWifiData()).data.wifiData.Hid);
  };

  if (!done && open) { setOldHidden(); setWifiName(); isDone(true); }

  const [wifiNewName, setWifiNewName] = useState('');
  const wifiNNRef = useRef();
  const [password, setPassword] = useState('');
  const passRef = useRef();
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const passConfRef = useRef();
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongName, setWrongName] = useState(false);

  const checkIntegrity = () => {
    // (password === passwordConfirmation && password.length > 8)
    //   ? ((clearOutline([passRef, passConfRef])), setWrongPassword(false))
    //   : (outlineInput([passRef, passConfRef]), setWrongPassword(true));

    // (wifiNewName.length >= 6)
    //   ? (clearOutline([wifiNNRef]), setWrongName(false))
    //   : (outlineInput([wifiNNRef]), setWrongName(true));

    if (password === passwordConfirmation && password.length > 8) {
      clearOutline([passRef, passConfRef]);
      setWrongPassword(false);
    } else {
      outlineInput([passRef, passConfRef]);
      setWrongPassword(true);
    }

    if (wifiNewName.length >= 6) {
      clearOutline([wifiNNRef]);
      setWrongName(false);
    } else {
      outlineInput([wifiNNRef]);
      setWrongName(true);
    }

    return !!((password === passwordConfirmation && password.length > 8 && wifiNewName.length > 6));
  };

  const outlineInput = (refs) => {
    for (const ref of refs) {
      ref.current.style.border = '3px solid red';
    }
  };

  const clearOutline = (refs) => {
    for (const ref of refs) {
      ref.current.style.border = 'none';
    }
  };

  const changeWifi = async (event) => {
    event.preventDefault();
    if (!checkIntegrity()) return;
    setWifiData({ wifiNewName, password, hidden });
  };

  return (
  /* eslint-disable */
  <div className={`${open ? 'modal-open':'modal-close'}`} onClick = {() => {setOpen(false)}}>

        <div className = 'modal-content'onClick={e => { e.stopPropagation();}}>
        <p> Configurações do wi-fi</p>
        <VscChromeClose size = {25} onClick= {()=> {setOpen(false)}} className='icon-close' />
        <hr />

        <form onSubmit ={changeWifi}>

            <div className="wifi-name">
                <label htmlFor="wifiname"> Digite o novo nome do wi-fi: </label>
                <input type="text" id="wifiname" name="wifiname" ref = {wifiNNRef}value={wifiNewName} onChange={(e) => {setWifiNewName(e.target.value)}} />
            </div>
            <div style={{display: wrongName ? 'flex' : 'none', height: '10px', marginBottom: '20px', justifyContent: 'end'}}>
                <p style={{ color: 'red'}}>O wi-fi precise ter um mínimo de 6 dígitos</p>
            </div>
            <p> O nome atual da rede wi-fi é: "{oldName}" </p>
            
            <div className="wifi-password">
                <label htmlFor="wifipassword"> Digite a nova senha:</label>
                <input type="password" id="wifipassword" name="wifipassword" ref={passRef} value ={password} onChange={(e)=> {setPassword(e.target.value)}}/>
            </div>

            <div className="wifi-password-confirmation">
                <label htmlFor="wifipasswordconfirmation"> Confirme a nova senha:</label>
                <input type="password" id="wifipassword" name="wifipasswordconfirmation" ref = {passConfRef} value={passwordConfirmation} onChange={(e) => {setPasswordConfirmation(e.target.value)}} />
            </div>

            <div style={{display: wrongPassword ? 'block' : 'none', height: '10px', marginBottom: '20px'}}>
                <p style={{color: 'red'}}>As senhas não são iguais e/ou precisam ter pelo menos 8 dígitos</p>
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
            <button className = 'submit-button'type='submit'> Confirmar </button>

        </form>
        </div>

  </div>
  )};
