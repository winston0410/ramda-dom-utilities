import * as R from 'ramda'

const addClass = (className) => R.tap((item) => item.classList.add(className))

export {
  addClass
}
