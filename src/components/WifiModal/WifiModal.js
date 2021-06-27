import React, { useState } from 'react';
import { socket } from '../../index';
import './WifiModal.css';

const name = 'overlay-modal';
const renewConnection = (event) => {
  event.preventDefault();
  socket.emit('renewConnection');
};
const WifiModal = () => {
  const [wrongConnection, triedConnect] = useState(false);
  socket.on('notConnected', (data) => {
    triedConnect(true);
    setTimeout(() => {
      triedConnect(false);
    }, 500);
  });
  return (
    <div className="overlay-modal">
      <div className={wrongConnection ? 'overlay-content-animation' : 'overlay-content'}>
        <p> Ocorreu um erro ao se conectar ao Wi-Fi! </p>
        <hr />
        <p>
          Lamentamos que isto tenha ocorrido, porém o aplicativo Atilla
          {' '}
          <br />
          Coffee Roaster
          Controller perdeu conexão à sua máquina
          {' '}
        </p>
        <div className="button-div">
          <button className="button-wifi" type="button" onClick={renewConnection}>
            <p>Tentar conectar novamente</p>
          </button>
        </div>
      </div>
    </div>

  );
};

export default WifiModal;
