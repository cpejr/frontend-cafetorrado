import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export default function Teste() {
  const { ThemeSwitch } = useContext(ThemeContext);
  return <ThemeSwitch />;
}
