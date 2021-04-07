import { socket } from '../../index';

const URL_GETDATA = 'http://localhost:8080/connectData';
const URL_DISCONNECTDATA = 'http://localhost:8080/disconnectData';
const URL_CONNECTWIFI = 'http://localhost:8080/connectWifi';
const URL_DISCONNECTWIFI = 'http://localhost:8080/disconnectWifi';

const getServerData = () => {
  fetch(URL_GETDATA);
  // socket.emit('startRoast');
};

const disconnectData = () => {
  fetch(URL_DISCONNECTDATA);
};

const disconnectWifi = () => {
  fetch(URL_DISCONNECTDATA);
};

const connectWifi = () => {
  fetch(URL_CONNECTWIFI);
};

export {
  getServerData, disconnectData, disconnectWifi, connectWifi,
};
