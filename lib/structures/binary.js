import * as R from 'ramda'

import {
  getFn
} from '../utilities/helper.js'

const binary = R.curry(
  (fnPath, arg1, arg2, el) => {
    const fn = getFn(fnPath, el)
    return R.defaultTo(el)(fn(arg1, arg2))
  }
)

export {
  binary
}
