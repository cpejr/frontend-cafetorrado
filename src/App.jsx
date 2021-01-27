import React from 'react';
import ThemeContextProvider from './Context/ThemeContext';
import './App.css';

// import coffee from './styles/themes/coffee';

function App() {
  return (
    <ThemeContextProvider>
      <div className="teste" />
      matheus
    </ThemeContextProvider>
  );
}

export default App;
