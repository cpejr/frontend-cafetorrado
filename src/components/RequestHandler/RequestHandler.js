import axios from 'axios';
import { socket } from '../../index';

const api = axios.create({ baseURL: 'http://localhost:8080' });

const URL_GETDATA = 'http://localhost:8080/connectData';
const URL_DISCONNECTDATA = 'http://localhost:8080/disconnectData';
const URL_CONNECTWIFI = 'http://localhost:8080/connectWifi';
const URL_DISCONNECTWIFI = 'http://localhost:8080/disconnectWifi';
const URL_SETCHARTPARAMS = 'http://localhost:8080/setChartParams';
const URL_DELETELASTROAST = 'http://localhost:8080/deleteLastRoast';

const getServerData = () => {
  axios.get(URL_GETDATA);
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

const setChartParams = async (RoastName) => {
  const parameters = {
    name: RoastName,
    description: 'Uma descrição legal',
  };
  const result = await axios.post(URL_SETCHARTPARAMS, parameters);
  return result.data;
};

const deleteLastRoast = () => {
  api.delete('/deleteLastRoast');
};
export {
  getServerData, disconnectData, disconnectWifi, connectWifi, setChartParams, deleteLastRoast,
};
