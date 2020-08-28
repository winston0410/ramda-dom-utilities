const {
  binary
} = require('./structures/binary.js')
const R = require('ramda')

const setAttribute = R.curry(
  (attr, value, el) => {
    el.setAttribute(attr, value)
    return el
  }
)

module.exports = {
  setAttribute
}
