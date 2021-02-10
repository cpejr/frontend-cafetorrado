import React from 'react';
import ThemeContextProvider from './Context/ThemeContext';
import './App.css';
import Teste from './Components/teste';
import TemplateWithDrawer from './templates';
import RouterComponent from './routes';
// import coffee from './styles/themes/coffee';

const valuesInfo = {
  pressao: 8.9,
  umidade: 79,
  massaGraos: 2468,
};

function App() {
  // return (
  //   <ThemeContextProvider>
  //     <TemplateWithDrawer valuesInfo={valuesInfo}>
  //       <div className="teste">
  //         <Teste />
  //       </div>
  //     </TemplateWithDrawer>
  //   </ThemeContextProvider>
  // );
  return (
    <ThemeContextProvider>
      <TemplateWithDrawer valuesInfo={valuesInfo}>
        <RouterComponent />
      </TemplateWithDrawer>
    </ThemeContextProvider>
  );
}

export default App;
