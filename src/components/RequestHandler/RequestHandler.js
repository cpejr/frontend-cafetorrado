import axios from 'axios';
import { socket } from '../../index';

const api = axios.create({ baseURL: 'http://localhost:8080' });

const getServerData = () => { api.get('/connectData'); };

const disconnectData = () => { api.get('/disconnectData'); };

const getRoasts = () => {
  const result = api.get('/');
  return result;
};

const disconnectWifi = () => { api.get('/disconnectWifi'); };

const connectWifi = () => { api.get('connectWifi'); };

const setChartParams = async (RoastName) => {
  const parameters = {
    name: RoastName,
    description: 'Uma descrição legal',
  };
  const result = await api.post('/setChartParams', parameters);
  return result.data;
};

const deleteLastRoast = () => { api.delete('/deleteLastRoast'); };

const getUniqueRoast = async (RoastName) => {
  const result = await api.get(`/getUniqueRoast/${RoastName}`);
  return result;
};
export {
  getServerData, disconnectData, disconnectWifi, connectWifi, setChartParams, deleteLastRoast,
  getUniqueRoast, getRoasts,
};
