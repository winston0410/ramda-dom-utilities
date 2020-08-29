const {
  setAttribute
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')
require('basichtml').init()

describe('setAttribute()', function () {
  let element, returnedValue

  beforeEach(function () {
    element = document.createElement('p')

    returnedValue = R.pipe(
      setAttribute('id', 'unique')
    )(element)
  })

  it('should set an attribute on the element', function () {
    expect(returnedValue).to.have.attr('id', 'unique')
  })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
