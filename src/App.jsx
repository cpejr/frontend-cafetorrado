import React, { useState } from 'react';
import '@fontsource/roboto';

import ThemeContextProvider from './Context/ThemeContext';
import RouterComponent from './routes';
import './App.css';

function App() {
  return (
    <ThemeContextProvider>
      <RouterComponent />
    </ThemeContextProvider>
  );
}

export default App;
