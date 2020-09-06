import * as R from 'ramda'

import {
  getFn
} from '../utilities/helper.js'

import {
  curryMethod
} from 'curry-method'

const unary = R.curry(
  (fnPath, arg, el) => {
    const fn = getFn(fnPath, el)
    return R.defaultTo(el)(fn(arg))
  }
)

export {
  unary
}
