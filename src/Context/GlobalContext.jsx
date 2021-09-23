import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext([]);

export default function ContextProvider({ children }) {
  const [marksGraph, setMarksGraph] = useState([]);

  return (
    <GlobalContext.Provider value={{ marksGraph, setter: setMarksGraph }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
