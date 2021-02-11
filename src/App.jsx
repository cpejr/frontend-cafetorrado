/* eslint-disable*/
import React, { useState } from 'react';
import ThemeContextProvider from './Context/ThemeContext';
import './App.css';

import TemplateWithDrawer from './templates';
import RouterComponent from './routes';

import Automatico from './Pages/TelaAutomatico/Automatico';
import { socket } from './index';

const valuesInfo = {
  pressao: 8.9,
  umidade: 79,
  massaGraos: 2468,
};
function App() {
  const [newData, setNewData] = useState({ waterTemp: 0, fireTemp: 0, ROR: 0 });
  //return (
  //   <ThemeContextProvider>
  //     <TemplateWithDrawer valuesInfo={valuesInfo}>
  //       <Automatico newData={newData} />
  //     </TemplateWithDrawer>
  //   </ThemeContextProvider>
  // );
  socket.on('connect', (data) => {
    socket.on('newData', (_data) => {
      setNewData(_data);
    });
  });
  return (
    <ThemeContextProvider>
      <TemplateWithDrawer valuesInfo={valuesInfo}>
        <RouterComponent data={newData} />
      </TemplateWithDrawer>
    </ThemeContextProvider>
  );
}

export default App;
