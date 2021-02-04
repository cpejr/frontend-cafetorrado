import React, { useReducer } from 'react';

function useToggle(initialValue = false) {
  return useReducer((state) => !state, initialValue);
}

const keep = 'apagar quando ouver mais itens';
export { useToggle, keep };
