/* eslint-disable*/
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
const io = require('socket.io-client');
export const socket = io.connect('http://localhost:8888')

ReactDOM.render(<App />, document.getElementById('root'));
