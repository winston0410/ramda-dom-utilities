const {
  readProp,
  createElement,
  append
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('readProp()', function () {
  let element, returnedValue

  beforeEach(function () {
    require('basichtml').init()

    element = createElement('p')(document)

    returnedValue = R.pipe(
      append(element),
      readProp('lastElementChild')
    )(document.body)
  })

  it('should return the accessed properties', function () {
    expect(returnedValue).to.eql(element)
  })
})
