import React, { useState } from 'react';
import '@fontsource/roboto';

import ThemeContextProvider from './Context/ThemeContext';
import GlobalContextProvider from './Context/GlobalContext';

import RouterComponent from './routes';
import './App.css';

function App() {
  return (
    <GlobalContextProvider>
      <ThemeContextProvider>
        <RouterComponent />
      </ThemeContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
