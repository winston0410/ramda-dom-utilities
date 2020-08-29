import * as R from 'ramda'

const unary = R.curry(
  (fn, el) => el[fn]()
)

export {
  unary
}
