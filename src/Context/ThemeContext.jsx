import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

const themes = {
  technologic: {
    backgroundColor: '#233643',
    fontColor: '#FFF',
    headerBackground: '#1B2126',
    dashboardBackground: '#1B2126',
    componentsBackgroud: '#0E1317',
    graphColor1: '#DEEBF7',
    graphColor2: '#C6DBEF',
    graphColor3: '#9ECAE1',
    graphColor4: '#4292C6',
    graphColor5: '#2171B5',
    graphColor6: '#08306B',
  },
  coffee: {
    backgroundColor: '#4D2914',
    fontColor: '#FFF',
    headerBackground: '#190902',
    dashboardBackground: '#DEA779',
    componentsBackgroud: '#2F1608',
    graphColor1: '#E8A900',
    graphColor2: '#E3A841',
    graphColor3: '#DEA779',
    graphColor4: '#956746',
    graphColor5: '#4D2914',
    graphColor6: '#190902',
  },
};
const ThemeContext = React.createContext({});

function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useState('technologic');
  const [theme, setTheme] = useState(themes[themeName]);

  const setCSSVariables = (themeAux) => {
    for (const value in themeAux) {
      if (themeAux[value]) {
        document.documentElement.style.setProperty(
          `--${value}`,
          themeAux[value]
        );
      }
    }
  };

  const toggleTheme = () => {
    if (themeName === 'technologic') {
      setTheme(themes.coffee);
      setThemeName('coffee');
    } else {
      setTheme(themes.technologic);
      setThemeName('technologic');
    }
  };

  useEffect(() => {
    const tema = localStorage.getItem('my-theme');
    if (tema) {
      setThemeName(tema);
    }
  }, []);

  useEffect(() => {
    setCSSVariables(theme);
    localStorage.setItem('my-theme', themeName);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName }}>
      <Switch
        onChange={toggleTheme}
        checked={themeName === 'technologic'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor="#E8A900"
        onColor="#2171B5"
        onHandleColor="#1B2126"
        offHandleColor="#1B2126"
      />
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
