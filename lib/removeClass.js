import * as R from 'ramda'

import {
  binary
} from './structures/binary.js'

// const removeClass = binary('classList.remove')

const removeClass = R.curry((className, item) => {
  item.classList.remove(className)
  return item
})

export {
  removeClass
}
