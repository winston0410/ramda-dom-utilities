const R = require('ramda')

const unary = R.curry(
  (fn, el) => el[fn]()
)

module.exports = {
  unary
}
