/*eslint-disable*/
import { useCallback } from 'react';
import { debounce } from 'lodash-es';

export const UseDebounce = (fnToDebounce, durationInMs = 200) => {
  if (Number.isNaN(durationInMs)) {
    throw new TypeError('durationInMs for debounce should be a number');
  }

  if (fnToDebounce == null) {
    throw new TypeError('fnToDebounce cannot be null');
  }

  if (typeof fnToDebounce !== 'function') {
    throw new TypeError('fnToDebounce should be a function');
  }

  return useCallback(debounce(fnToDebounce, durationInMs), [fnToDebounce, durationInMs]);
};

export default UseDebounce;
