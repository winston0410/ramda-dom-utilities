const {
  binary
} = require('./structures/binary.js')
const R = require('ramda')

const containsClass = R.curry(
  (className, item) => item.classList.contains(className)
)

module.exports = {
  containsClass
}
