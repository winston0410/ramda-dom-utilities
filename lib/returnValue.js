import * as R from 'ramda'

import {
  isFunction
} from './utilities/helper.js'

const returnValueHelper = (fn, targetParams, params) => (...args) => {
  const allParams = [...params, ...args]
  const result = R.when(isFunction, R.apply(R.__, args))(fn)
  return isFunction(result) ? returnValueHelper(result, targetParams, allParams)
    : targetParams.length === 0 ? result
      : allParams.filter((p, i) => targetParams.includes(i))
}

// TODO: FP

// const resultIsFunction = ({ result }) => isFunction(result)
//
// const returnValueFunction = ({ result, targetParams, params }) => (...args) => returnValueHelper2(R.apply(result, args), targetParams, [...params, ...args])
//
// const hasTargetParams = ({ targetParams }) => targetParams.length > 0
//
// const getTargetParams = ({ targetParams, params }) => params.filter((p, i) => targetParams.includes(i))
//
// const returnValueHelper2 = (result, targetParams, params) => R.ifElse(
//   resultIsFunction,
//   returnValueFunction,
//   R.ifElse(
//     hasTargetParams,
//     getTargetParams,
//     R.prop('result')
//   )
// )({ result, targetParams, params })

const returnValue = (fn, targetParams = []) => R.when(
  isFunction,
  R.curry(returnValueHelper)(R.__, targetParams, [])
)(fn)

export {
  returnValue
}
