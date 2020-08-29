const {
  addClass,
  containsClass,
  removeClass
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('removeClass()', function () {
  let element, returnedValue

  beforeEach(function () {
        require('basichtml').init()
    element = document.createElement('p')

    returnedValue = R.pipe(
      addClass('test-class'),
      removeClass('test-class')
    )(element)
  })

  it('should remove a class from element', function () {
    expect(returnedValue).to.not.have.class('test-class')
  })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
