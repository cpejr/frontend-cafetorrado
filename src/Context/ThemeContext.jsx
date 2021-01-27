import React, { useState, useEffect } from 'react';

const themes = {
  technologic: {
    primary: '#4292C6',
    backgroundColor: '#233643',
    color: '#FFF',
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
    primary: '#E8A900',
    backgroundColor: '#4D2914',
    color: '#FFF',
    headerbackground: '#190902',
    dashboardbackground: '#DEA779',
    componentscolor: '#E8A900',
    componentsbackgroud: '#2F1608',
    graphColor1: '#DEEBF7',
    graphColor2: '#C6DBEF',
    graphColor3: '#9ECAE1',
    graphColor4: '#4292C6',
    graphColor5: '#2171B5',
    graphColor6: '#08306B',
  },
};
const ThemeContext = React.createContext({});

function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useState('coffee');
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
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
