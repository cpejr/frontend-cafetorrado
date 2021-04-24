import axios from 'axios';

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

const getUniqueRoastData = async (roast_id) => {
  const result = await api.get(`/getUniqueRoastData/${roast_id}`);
  return result;
};

const sendESPData = (parameters) => {
  for (const key in parameters) {
    if (parameters[key]) {
      api.post('/sendData', parameters);
    }
  }
};

const getWifiData = () => {
  const result = api.get('/connectWifi');
  return result;
};

export {
  getServerData, disconnectData, disconnectWifi, connectWifi, setChartParams, deleteLastRoast,
  getUniqueRoastData, getRoasts, sendESPData, getWifiData,
};
