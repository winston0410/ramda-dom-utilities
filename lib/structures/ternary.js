import * as R from 'ramda'

const ternary = R.curry(
  (fn, key, value, el) => {
    return R.defaultTo(el)(el[fn](key, value))
  }
)

export {
  ternary
}
