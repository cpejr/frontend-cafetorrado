/* eslint-disable*/
import React, { useState } from 'react';
import ThemeContextProvider from './Context/themeContext';
import './App.css';
import RouterComponent from './routes';

import { socket } from './index';

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
      <RouterComponent data={newData} />
    </ThemeContextProvider>
  );
}

export default App;
