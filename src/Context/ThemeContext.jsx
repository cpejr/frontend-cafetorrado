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
import { getLastTheme, updateLastTheme } from '../components/Functions/RequestHandler/RequestHandler';

const themes = {
  technologic: {
    backgroundColor: '#0B1E40',
    fontColor: '#FFFFFF',
    fontColorContrast: '#ffffff',
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
    graphColor7: '#ff8c00',
    buttonColor: 'rgba(100,0,255,0.4)',
    buttonAlternative: '#0000009d',
  },
  grey: {
    backgroundColor: '#e6e3e3',
    fontColor: '#000000',
    fontColorContrast: '#ffffff',
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
    graphColor7: '#ff8c00',
    buttonColor: '#000000',
    buttonAlternative: '#969696',
  },
  white: {
    backgroundColor: '#FFFFFF',
    fontColor: '#0E1317',
    fontColorContrast: '#ffffff',
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
    graphColor7: '#ff8c00',
    buttonColor: '#000000',
    buttonAlternative: '#969696',
  },
  dark: {
    backgroundColor: '#0E1317',
    fontColor: '#FFFFFF',
    fontColorContrast: '#ffffff',
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
    graphColor7: '#ff8c00',
    buttonColor: '#0060a0',
    buttonAlternative: '#0e018881',
  },
};
export const ThemeContext = React.createContext({});

function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useState();
  const [theme, setTheme] = useState();

  useEffect(async () => {
    const lastTheme = await getLastTheme();
    setCSSVariables(themes[lastTheme.data.lastTheme]);
    setTheme(themes[lastTheme.data.lastTheme]);
  }, []);

  // useEffect(() => {
  //   setCSSVariables(themes[themeName]);
  //   setTheme(themes[themeName]);
  // }, []);

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
      updateLastTheme('grey');
      setTheme(themes.grey);
      setThemeName('grey');
    } else if (themeName === 'grey') {
      updateLastTheme('dark');
      setTheme(themes.dark);
      setThemeName('dark');
    } else if (themeName === 'dark') {
      updateLastTheme('white');
      setTheme(themes.white);
      setThemeName('white');
    } else {
      updateLastTheme('technologic');
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
