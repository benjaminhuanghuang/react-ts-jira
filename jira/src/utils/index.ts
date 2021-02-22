import { useState, useEffect } from "react";

export const isFalsy = (val: unknown) => (val === 0 ? false : !val);

export const cleanObject = (obj: object) => {
  // Object.assign({}, object);
  const result = { ...obj };
  Object.keys(obj).forEach((key) => {
    // @ts-ignore
    const val = result[key];
    if (isFalsy(val)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeOut = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeOut);
  }, [value, delay]);

  return debouncedValue;
};
