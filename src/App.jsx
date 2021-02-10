import React from 'react';
import ThemeContextProvider from './Context/ThemeContext';
import './App.css';
import RouterComponent from './routes';

function App() {
  return (
    <ThemeContextProvider>
      <RouterComponent />
    </ThemeContextProvider>
  );
}

export default App;
