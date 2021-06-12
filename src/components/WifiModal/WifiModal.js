import React, { useState } from 'react';
import { socket } from '../../index';
import './WifiModal.css';

const name = 'overlay-modal';
const renewConnection = (event) => {
  event.preventDefault();
  console.log('aaaaa');
  socket.emit('renewConnection', { Object: 'Um objeto qualquer' });
};
const WifiModal = () => (
  <div className="overlay-modal">
    <div className="overlay-content">
      <p> Ocorreu um erro ao se conectar ao Wi-Fi! </p>
      <hr />
      <p>
        Lamentamos que isto tenha ocorrido, porém o aplicativo Atilla
        {' '}
        <br />
        Coffee Roaster
        Controller perdeu sua conexão à sua máquina
        {' '}
      </p>
      <button className="button-wifi" type="button" onClick={renewConnection}>
        {' '}
        <p>Tentar conectar novamente</p>
        {' '}
      </button>
    </div>
  </div>

);

export default WifiModal;
