import React, {
  createContext,
  useState,
  useContext,
} from 'react';

const GlobalContext = createContext([]);

export default function ContextProvider({ children }) {
  const [marksGraph, setMarksGraph] = useState([]);
  const [clickedCrack, setClickedCrack] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        marksGraph,
        setter: setMarksGraph,
        clickedCrack,
        setClickedCrack,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
