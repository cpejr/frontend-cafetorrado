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
    fontColorContrast: '#FFFFFF',
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
    buttonColor: '#01097d',
    buttonAlternative: '#22607a',
    buttonHover: 'black',

  },
  grey: {
    backgroundColor: '#d1cfcf',
    fontColor: '#000000',
    fontColorContrast: 'black',
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
    buttonAlternative: '#575555',
    buttonHover: 'black',

  },
  white: {
    backgroundColor: '#f2eded',
    fontColor: '#0E1317',
    fontColorContrast: 'black',
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
    buttonAlternative: '#7d736f',
    buttonHover: 'black',
  },
  dark: {
    backgroundColor: '#2a3544',
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
    buttonAlternative: '#325175',
    buttonHover: 'black',
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
