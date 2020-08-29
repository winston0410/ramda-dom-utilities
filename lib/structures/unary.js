import {
  pathLens
} from '../utilities/helper.js'

import * as R from 'ramda'

const unary = R.curry(
  (fnName, target, el) => {
    const fn = R.pipe(
      pathLens,
      R.view(R.__, el),
      R.bind(R.__, el) // Bind this to prevent error
    )(fnName)
    return R.defaultTo(el)(fn(target))
  }
)

export {
  unary
}
