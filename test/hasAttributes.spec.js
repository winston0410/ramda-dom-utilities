const {
  hasAttributes,
  setAttribute
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('hasAttributes()', function () {
  let element, returnedValue, elementToFail

  beforeEach(function () {
    require('basichtml').init()
    element = document.createElement('p')
    // TODO: Check if jsdom always applys attribute to an element
    // elementToFail = document.createElement('span')

    returnedValue = R.pipe(
      setAttribute('id', 'unique'),
      hasAttributes
    )(element)
  })

  it('should whether the element has any attribute or not', function () {
    expect(returnedValue).to.be.true
    // expect(hasAttributes(elementToFail)).to.be.false
  })
})
