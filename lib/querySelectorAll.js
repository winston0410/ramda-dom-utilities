const {
  binary
} = require('./structures/binary.js')
const R = require('ramda')

const querySelector = R.curry(
  (target, el) => el.querySelectorAll(target)
)

module.exports = {
  querySelector
}
