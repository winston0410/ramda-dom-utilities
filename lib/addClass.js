const {
  binary
} = require('./structures/binary.js')
const R = require('ramda')

const addClass = R.curry((className, item) => {
  item.classList.add(className)
  return item
})

module.exports = {
  addClass
}
