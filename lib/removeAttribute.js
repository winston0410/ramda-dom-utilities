const {
  binary
} = require('./structures/binary.js')
const R = require('ramda')

const removeAttribute = R.curry(
  (value, el) => {
    el.removeAttribute(value)
    return el
  }
)

module.exports = {
  removeAttribute
}
