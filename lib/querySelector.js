const {
  binary
} = require('./structures/binary.js')
const R = require('ramda')

const querySelectorAll = R.curry(
  (target, el) => el.querySelector(target)
)

module.exports = {
  querySelectorAll
}
