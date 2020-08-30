import * as R from 'ramda'

import {
  getFn
} from '../utilities/helper.js'

const unary = R.curry(
  (fnPath, arg, el) => {
    const fn = getFn(fnPath, el)
    return R.defaultTo(el)(fn(arg))
  }
)

export {
  unary
}
