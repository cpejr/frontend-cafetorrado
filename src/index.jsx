import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const io = require('socket.io-client');

export const socket = io.connect('https://cafetorrado-backend.herokuapp.com:9000');

ReactDOM.render(<App />, document.getElementById('root'));
