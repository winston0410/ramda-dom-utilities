const {
  hasAttribute,
  setAttribute
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('hasAttribute()', function () {
  let element, returnedValue

  beforeEach(function () {
    require('basichtml').init()
    element = document.createElement('p')

    returnedValue = R.pipe(
      setAttribute('id', 'unique'),
      hasAttribute('id')
    )(element)
  })

  it('should whether the element has an attribute', function () {
    expect(returnedValue).to.be.true
    expect(hasAttribute('readonly')(element)).to.be.false
  })
})
