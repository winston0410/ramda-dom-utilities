import * as R from 'ramda'

import {
  pathLens
} from '../utilities/helper.js'

const binary = R.curry(
  (fnName, key, value, el) => {
    const fn = R.pipe(
      pathLens,
      R.view(R.__, el),
      R.bind(R.__, el) // Bind this to prevent error
    )(fnName)
    return R.defaultTo(el)(fn(key, value))
  }
)

export {
  binary
}
