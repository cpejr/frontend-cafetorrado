import React, { useContext } from 'react';
import { ThemeContext } from '../Context/themeContext';

export default function Theme() {
  const { ThemeSwitch } = useContext(ThemeContext);
  return <ThemeSwitch />;
}
