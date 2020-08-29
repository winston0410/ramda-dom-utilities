import * as R from 'ramda'

const binary = R.curry(
  (fn, key, value, el) => {
    return R.defaultTo(el)(el[fn](key, value))
  }
)

export {
  binary
}
