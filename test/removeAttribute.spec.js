const {
  removeAttribute,
  setAttribute
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('setAttribute()', function () {
  let element, returnedValue

  beforeEach(function () {
        require('basichtml').init()
    element = document.createElement('p')

    returnedValue = R.pipe(
      setAttribute('id', 'unique'),
      removeAttribute('id')
    )(element)
  })

  it('should remove an attribute from the element', function () {
    expect(returnedValue).to.not.have.attr('id', 'unique')
  })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
