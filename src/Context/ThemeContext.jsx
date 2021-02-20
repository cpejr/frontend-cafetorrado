import React, { useState, useEffect } from 'react';
import { MdBrightness6 } from 'react-icons/md';
import './ThemeContext.css';

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
  grey: {
    backgroundColor: '#F3EFEF',
    fontColor: '#0E1317',
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
  white: {
    backgroundColor: '#FFFFFF',
    fontColor: '#0E1317',
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
  dark: {
    backgroundColor: '#0E1317',
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
      setTheme(themes.grey);
      setThemeName('grey');
    } else if (themeName === 'grey') {
      setTheme(themes.dark);
      setThemeName('dark');
    } else if (themeName === 'dark') {
      setTheme(themes.white);
      setThemeName('white');
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
      <button
        className="buttonTheme"
        type="button"
        onClick={toggleTheme}
        checked={themeName === 'technologic'}
      >
        <MdBrightness6
          checkedIcon={false}
          uncheckedIcon={false}
          color="#E0E0E0"
        />
        <span>Temas</span>
      </button>
    );
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName, ThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
