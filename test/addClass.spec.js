const {
  addClass
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('addClass()', function () {
  let element, returnedValue

  beforeEach(function () {
        require('basichtml').init()
    element = document.createElement('p')

    returnedValue = R.pipe(
      addClass('test-class')
    )(element)
  })

  it('should add a class to an element', function () {
    expect(returnedValue).to.have.class('test-class')
  })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
