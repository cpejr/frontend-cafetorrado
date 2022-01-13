import axios from 'axios';
import { persistUser } from '../../../services/auth';
import config from '../../../config';

const api = axios.create({ baseURL: config.httpURL });

const getServerData = () => { api.get('/connectData'); };

const disconnectData = () => { api.get('/disconnectData'); };

const getRoasts = () => {
  const result = api.get('/');
  return result;
};

const disconnectWifi = () => { api.get('/disconnectWifi'); };

const connectWifi = () => { api.get('connectWifi'); };

const login = async (username, password) => {
  const parameters = {
    username,
    password,
  };
  const { data } = await api.post('/login', parameters);
  persistUser(data);
};

const setChartParams = async (RoastName) => {
  const parameters = {
    name: RoastName,
    description: 'Uma descrição legal',
  };
  const result = await api.post('/setChartParams', parameters);
  return result.data;
};

const saveMarks = async (mark, roastId) => {
  const response = await api.post(`/saveMark/${roastId}`, mark);
  return response;
};

const getMarksByRoastId = async (roastId) => {
  const response = await api.get(`/marks/${roastId}`);
  return response.data;
};

const deleteLastRoast = () => { api.delete('/deleteLastRoast'); };

const deleteSpecificRoast = (roast_id) => { api.delete(`/deleteSpecificRoast/${roast_id}`); };

const getUniqueRoastData = async (roast_id) => {
  const result = await api.get(`/getUniqueRoastData/${roast_id}`);
  return result;
};

const sendESPData = (parameters) => {
  for (const key in parameters) {
    if (parameters[key] !== undefined && parameters[key] !== null) {
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

const sendUploadFile = (file) => {
  const result = api.post('/sendUploadFiles', file);
  return result;
};

export {
  getServerData, disconnectData, disconnectWifi, connectWifi, setChartParams, deleteLastRoast,
  getUniqueRoastData, getRoasts, sendESPData, getWifiData, setWifiData, sendStaticParameters,
  deleteSpecificRoast, getLastTheme, updateLastTheme, sendUploadFile, saveMarks, getMarksByRoastId,
  login,
};
