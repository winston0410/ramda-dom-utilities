import * as R from 'ramda'

import {
  isFunction
} from './utilities/helper.js'

// const returnValue = (fn, targetParams = [], params = []) => (...args) => {
//   const allParams = [...params, ...args]
//   if (allParams.length >= fn.length) {
//     return targetParams.length === 0 ? fn(...allParams)
//            : allParams.filter((p, i) => targetParams.includes(i))
//   }
//   return returnValue(fn, targetParams, allParams)
// }

const returnValue = (fn, targetParams = [], params = []) => (...args) => {
  const allParams = [...params, ...args]
  const result = R.apply(fn, args)
  return isFunction(result) ? returnValue(result, targetParams, allParams)
    : targetParams.length === 0 ? result
      : allParams.filter((p, i) => targetParams.includes(i))
}

export {
  returnValue
}
