import {useEffect, useState} from 'react'

export const isFalsy = (value: unknown) => (value === 0 ? false : !value)

export const cleanObject = (object: object) => {
  // 不要污染传入的对象 Object.assign({}, object)
  const result = {...object}
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key]
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key]
    }
  })
  return result
}

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debounceValue
}

export const useMount = (callback: () => void) => {
  useEffect(() => callback(), [])
}
