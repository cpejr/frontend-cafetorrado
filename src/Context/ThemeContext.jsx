import React, { useState, useEffect } from 'react';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from '@material-ui/core';
import './ThemeContext.css';

const themes = {
  technologic: {
    backgroundColor: '#0B1E40',
    fontColor: '#FFFFFF',
    headerMenuBackground: '#00193E',
    headerBackground: '#091929',
    dashboardBackground: '#091929',
    componentsBackgroud: '#0E1317',
    fontColorComponents: '#FFFFFF',
    graphColor1: 'blue',
    graphColor2: '#C6DBEF',
    graphColor3: '#9ECAE1',
    graphColor4: '#4292C6',
    graphColor5: '#2171B5',
    graphColor6: '#08306B',
  },
  grey: {
    backgroundColor: '#F3EFEF',
    fontColor: '#0E1317',
    headerMenuBackground: '#858080',
    headerBackground: '#9F9C9C',
    dashboardBackground: '#9F9C9C',
    componentsBackgroud: '#0E1317',
    fontColorComponents: '#0E1317',
    graphColor1: 'red',
    graphColor2: '#C6DBEF',
    graphColor3: '#9ECAE1',
    graphColor4: '#4292C6',
    graphColor5: '#2171B5',
    graphColor6: '#08306B',
  },
  white: {
    backgroundColor: '#FFFFFF',
    fontColor: '#0E1317',
    headerMenuBackground: '#858080',
    headerBackground: '#9F9C9C',
    dashboardBackground: '#9F9C9C',
    componentsBackgroud: '#0E1317',
    fontColorComponents: '#0E1317',
    graphColor1: 'blue',
    graphColor2: '#C6DBEF',
    graphColor3: '#9ECAE1',
    graphColor4: '#4292C6',
    graphColor5: '#2171B5',
    graphColor6: '#08306B',
  },
  dark: {
    backgroundColor: '#0E1317',
    fontColor: '#FFFFFF',
    headerMenuBackground: '#233643',
    headerBackground: '#1b2126',
    dashboardBackground: '#1b2126',
    componentsBackgroud: '#0E1317',
    fontColorComponents: '#FFFFFF',
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
  const [theme, setTheme] = useState();

  useEffect(() => {
    setCSSVariables(themes[themeName]);
    setTheme(themes[themeName]);
  }, []);

  function setCSSVariables(themeAux) {
    for (const value in themeAux) {
      if (themeAux[value]) {
        document.documentElement.style.setProperty(
          `--${value}`,
          themeAux[value],
        );
      }
    }
  }

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
    if (theme) {
      setCSSVariables(theme);
      localStorage.setItem('my-theme', themeName);
    }
  }, [theme]);

  function ThemeSwitch() {
    return (
      <ListItem
        button
        onClick={toggleTheme}
        checked={themeName === 'technologic'}
      >
        <ListItemIcon>
          <Brightness6Icon
            checkedIcon={false}
            uncheckedIcon={false}
            className="button-theme"
          />
        </ListItemIcon>
        <ListItemText>Temas</ListItemText>
      </ListItem>
    );
  }

  return (
    <ThemeContext.Provider value={{
      toggleTheme, themeName, ThemeSwitch, theme,
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
