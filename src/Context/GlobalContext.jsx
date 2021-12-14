import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';

const GlobalContext = createContext([]);

export default function ContextProvider({ children }) {
  const [marksGraph, setMarksGraph] = useState([]);
  const [graphData, setGraphData] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        marksGraph,
        setter: setMarksGraph,
        graphData,
        setGraphData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
