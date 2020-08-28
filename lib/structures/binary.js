import * as R from 'ramda'

const binary = R.curry(
  (fn, target, el) => el[fn](target)
)

export {
  binary
}
