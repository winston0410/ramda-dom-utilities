const R = require('ramda')

const ternary = R.curry(
  (fn, key, value, el) => {
    return R.defaultTo(el)(el[fn](key, value))
  }
)

module.exports = {
  ternary
}
