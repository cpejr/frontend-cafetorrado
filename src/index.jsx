import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import TemplateWithDrawer from './templates';
// import { w3cwebsocket as W3CWebSocket } from 'websocket';
import App from './App';
/*


const client = new W3CWebSocket('ws://127.0.0.1:9000');

const valuesInfo = {
  pressao: 8.9,
  umidade: 79,
  massaGraos: 2468,
};

export default function App() {
  useEffect(() => {
    client.onopen = () => {
      console.log('Websocket Client conected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply!', dataFromServer);
    };
  }, []);

  const onButtonClicked = (value) => {
    client.send(
      JSON.stringify({
        type: 'message',
        msg: value,
      })
    );
  };

  return (
    <TemplateWithDrawer valuesInfo={valuesInfo}>
      <h1>Apenas um teste</h1>
      <h2>Outro teste</h2>
      <button type="button" onClick={() => onButtonClicked('hello')}>
        {' '}
        Send message{' '}
      </button>
    </TemplateWithDrawer>
  );
}
*/
ReactDOM.render(<App />, document.getElementById('root'));
