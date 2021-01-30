import React, {useEffect, useState} from 'react'

export const isFalsy = (value) => (value === 0 ? false : !value)

export const cleanObject = (object) => {
  // 不要污染传入的对象 Object.assign({}, object)
  const result = {...object}
  Object.keys(result).forEach((key) => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay)
    return () => clearTimeout(timeout)
  }, [value])
  return debounceValue
}

export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}
