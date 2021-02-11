import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import TemplateWithDrawer from './templates';
import App from './App';
import './index.css';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:8888');
let newDetails = {
  waterTemp: 0,
  fireTemp: 0,
};
console.log(newDetails.waterTemp, newDetails.fireTemp);
socket.on('connect', (data) => {
  socket.on('newData', (_data) => {
    newDetails = {
      waterTemp: _data.waterTemp,
      fireTemp: _data.fireTemp,
    };
    console.log(newDetails.waterTemp, newDetails.fireTemp);
  });

  console.log('I"m alive, I breathe and I have a purpose for existing');
});

ReactDOM.render(<App />, document.getElementById('root'));
