import React from 'react';
import ThemeContextProvider from './Context/ThemeContext';
import './App.css';

import TemplateWithDrawer from './templates';
import RouterComponent from './routes';

import Automatico from './Pages/TelaAutomatico/Automatico';

const valuesInfo = {
  pressao: 8.9,
  umidade: 79,
  massaGraos: 2468,
};

function App() {
  return (
    <ThemeContextProvider>
      <TemplateWithDrawer valuesInfo={valuesInfo}>
        <Automatico />
      </TemplateWithDrawer>
    </ThemeContextProvider>
  );
  // return (
  //    <ThemeContextProvider>
  //     <TemplateWithDrawer valuesInfo={valuesInfo}>
  //        <RouterComponent />
  //      </TemplateWithDrawer>
  //    </ThemeContextProvider>
  // );
}

export default App;
