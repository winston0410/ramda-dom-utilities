import * as R from 'ramda'

import {
  binary
} from './structures/binary.js'

const getElementById = binary('getElementById')
//
// R.curry(
//   (target, el) => el.getElementById(target)
// )

export {
  getElementById
}
