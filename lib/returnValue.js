'use strict'

import * as R from 'ramda'

const returnValue = R.curry(
  (paramIndice, fn, args) => {
    // console.log(paramIndice)
    // console.log(fn)
    // console.log(args)
    //
    // if (R.is(Function)(fn)) {
    //   console.log('Fn is a function')
    //   return returnValue(paramIndice, fn(args))
    // }
    //
    // console.log('Fn is not a function anymore')
    // // console.log(fn)
    //
    // return fn
  }
)

export {
  returnValue
}
//
// const test = (a1, a2) => a1
// const foo = 'bar'
// const hello = 'world'
