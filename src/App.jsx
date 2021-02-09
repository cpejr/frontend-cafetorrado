import React from 'react';
import ThemeContextProvider from './Context/ThemeContext';
import './App.css';
import Teste from './Components/teste';

// import coffee from './styles/themes/coffee';

function App() {
  return (
    <ThemeContextProvider>
      <div className="teste">
        <Teste />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
