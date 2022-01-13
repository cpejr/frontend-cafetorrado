import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import config from './config';
import App from './App';
import './index.css';

const io = require('socket.io-client');

export const socket = io.connect(config.socketURL);

ReactDOM.render(<App />, document.getElementById('root'));
