import {
  unary
} from './structures/unary.js'

import * as R from 'ramda'

// const addClass = binary('classList.add')

const addClass = R.curry((className, item) => {
  item.classList.add(className)
  return item
})

export {
  addClass
}
