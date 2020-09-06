import * as R from 'ramda'

import {
  getFn
} from '../utilities/helper.js'

import {
  curryMethod
} from 'curry-method'

const binary = curryMethod(2)

export {
  binary
}
