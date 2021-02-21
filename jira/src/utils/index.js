import {useState, useEffect} from 'react'

export const isFalsy = (val) => val === 0 ? false : !val;

export const cleanObject = (obj) => {
  // Object.assign({}, object);
  const result = { ...obj };
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (isFalsy(val)) {
      delete result[key];
    }
  });
  return result
};


export const useMount = (callback) =>{
  useEffect(()=>{
    callback()
  }, [])
} 


export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeOut = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeOut);
  }, [value, delay]);

  return debouncedValue;
};