import axios from 'axios';
// import { sendMachineParams } from '../../../../../backend-cafetorrado/src/Clients/client_LUTs';

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

const deleteSpecificRoast = (roast_id) => { api.delete(`/deleteSpecificRoast/${roast_id}`); };

const getUniqueRoastData = async (roast_id) => {
  const result = await api.get(`/getUniqueRoastData/${roast_id}`);
  return result;
};

const sendESPData = (parameters) => {
  // eslint-disable-next-line
  for (const key in parameters) {
    if (parameters[key]) {
      api.post('/sendData', parameters);
    } else if (parameters.MdlIgnAcv !== undefined || parameters.MdlMisAcv !== undefined) {
      api.post('/sendData', parameters);
    }
  }
};

const sendStaticParameters = (roast_id) => {
  const result = api.post(`/sendStaticLUTs/${roast_id}`);
  return result;
};

const getWifiData = () => {
  const result = api.get('/connectWifi');
  return result;
};

const setWifiData = ({ wifiNewName, password, hidden }) => {
  const result = api.post('/changeWifi', { wifiName: wifiNewName, password, hidden });
  return result;
};

const getLastTheme = () => {
  const lastTheme = api.get('/getLastTheme');
  return lastTheme;
};

const updateLastTheme = (themeName) => {
  const result = api.put('/updateLastTheme', { lastTheme: themeName });
  return result;
};

export {
  getServerData, disconnectData, disconnectWifi, connectWifi, setChartParams, deleteLastRoast,
  getUniqueRoastData, getRoasts, sendESPData, getWifiData, setWifiData, sendStaticParameters,
  deleteSpecificRoast, getLastTheme, updateLastTheme,
};
