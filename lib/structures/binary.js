import {
  pathLens
} from '../utilities/helper.js'

import * as R from 'ramda'

const binary = R.curry(
  (fn, target, el) => {
    return R.defaultTo(el)(el[fn](target))
  }
)

export {
  binary
}
