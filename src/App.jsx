/* eslint-disable*/
import React, { useState } from 'react';
import ThemeContextProvider from './Context/ThemeContext';
import './App.css';
import RouterComponent from './routes';
"use strict";
import { socket } from './index';

function App() {
  //return (
  //   <ThemeContextProvider>
  //     <TemplateWithDrawer valuesInfo={valuesInfo}>
  //       <Automatico newData={newData} />
  //     </TemplateWithDrawer>
  //   </ThemeContextProvider>
  // );
  return (
    <ThemeContextProvider>
      <RouterComponent />
    </ThemeContextProvider>
  );
}

export default App;
