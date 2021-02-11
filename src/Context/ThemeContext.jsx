import React, { useState, useEffect } from 'react';
import { MdBrightness6 } from 'react-icons/md';

const themes = {
  technologic: {
    backgroundColor: '#0B1E40',
    fontColor: '#FFFFFF',
    headerBackground: '#091929',
    dashboardBackground: '#091929',
    componentsBackgroud: '#0E1317',
    graphColor1: '#DEEBF7',
    graphColor2: '#C6DBEF',
    graphColor3: '#9ECAE1',
    graphColor4: '#4292C6',
    graphColor5: '#2171B5',
    graphColor6: '#08306B',
  },
  coffee: {
    backgroundColor: '#E0E0E0',
    fontColor: '#091929',
    headerBackground: '#091929',
    dashboardBackground: '#091929',
    componentsBackgroud: '#0E1317',
    graphColor1: '#DEEBF7',
    graphColor2: '#C6DBEF',
    graphColor3: '#9ECAE1',
    graphColor4: '#4292C6',
    graphColor5: '#2171B5',
    graphColor6: '#08306B',
  },
};
export const ThemeContext = React.createContext({});

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

  function ThemeSwitch() {
    return (
      <MdBrightness6
        onClick={toggleTheme}
        checked={themeName === 'technologic'}
        checkedIcon={false}
        uncheckedIcon={false}
        size={24}
        color="#E0E0E0"
      />
    );
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName, ThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
