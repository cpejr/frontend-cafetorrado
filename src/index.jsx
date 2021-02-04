import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import TemplateWithDrawer from './templates';

const client = new W3CWebSocket('ws://127.0.0.1:9000');

export default class App extends Component {
  componentDidMount() {
    client.onopen = () => {
      console.log('Websocket Client conected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply!', dataFromServer);
    };
  }

  onButtonClicked = (value) => {
    client.send(
      JSON.stringify({
        type: 'message',
        msg: value,
      })
    );
  };

  render() {
    return (
      <TemplateWithDrawer>
        <h1>Apenas um teste</h1>
        <h2>Outro teste</h2>
        <button type="button" onClick={() => this.onButtonClicked('hello')}>
          {' '}
          Send message{' '}
        </button>
      </TemplateWithDrawer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
