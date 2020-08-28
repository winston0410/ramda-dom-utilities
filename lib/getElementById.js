const {
  binary
} = require('./structures/binary.js')
const R = require('ramda')

const getElementById = R.curry(
  (target, el) => el.getElementById(target)
)

module.exports = {
  getElementById
}
