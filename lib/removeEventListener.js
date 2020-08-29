import * as R from 'ramda'

import {
  ternary
} from './structures/ternary.js'

const removeEventListener = ternary('removeEventListener')

export {
  removeEventListener
}
