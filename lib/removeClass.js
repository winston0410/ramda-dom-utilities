const {
  binary
} = require('./structures/binary.js')
const R = require('ramda')

const removeClass = R.curry((className, item) => {
  item.classList.remove(className)
  return item
})

module.exports = {
  removeClass
}
