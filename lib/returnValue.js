'use strict'

import * as R from 'ramda'

// const returnValue = R.curry(
//   (paramIndice, fn, args) => {
//     // console.log(paramIndice)
//     // console.log(fn)
//     // console.log(args)
//     //
//     // if (R.is(Function)(fn)) {
//     //   console.log('Fn is a function')
//     //   return returnValue(paramIndice, fn(args))
//     // }
//     //
//     // console.log('Fn is not a function anymore')
//     // // console.log(fn)
//     //
//     // return fn
//   }
// )

const isValidTargetParams = R.allPass([
  R.is(Array),
  R.complement(R.isEmpty),
  R.all(R.is(Number))
])

const isFunction = R.is(Function)

const hasValidTargetParamsAndFunction = R.allPass([
  R.pathSatisfies(isValidTargetParams, [0]),
  R.pathSatisfies(isFunction, [1])
])

const returnValueHelper = R.curry(
  (targetParams, fn, params) => (...args) => {
    const allParams = [...params, ...args]
    const result = R.apply(fn, args)
    return R.is(Function)(result) ? returnValueHelper(targetParams, result, allParams)
      : allParams.filter((p, i) => targetParams.includes(i))
  }
)

const returnValue = R.curry(
  (targetParams, fn) => R.ifElse(
    hasValidTargetParamsAndFunction,
    R.apply(returnValueHelper(R.__, R.__, [])),
    R.view(R.lensPath([1]))
  )([ targetParams, fn ])
)

export {
  returnValue
}
