const R = require('ramda')

const binary = R.curry(
  (fn, target, el) => {
    return R.defaultTo(el)(el[fn](target))
  }
)

module.exports = {
  binary
}
