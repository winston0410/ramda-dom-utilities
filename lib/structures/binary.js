const R = require('ramda')

const binary = R.curry(
  (fn, target, el) => el[fn](target)
)

module.exports = {
  binary
}
