import * as R from 'ramda'

import {
  getFn
} from '../utilities/helper.js'

import {
  curryMethod
} from 'curry-method'

const nullary = R.curry(
  (fnPath, el) => {
    const fn = getFn(fnPath, el)
    return R.defaultTo(el)(fn())
  }
)

export {
  nullary
}
