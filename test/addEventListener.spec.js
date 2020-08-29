const {
  addEventListener
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('addEventListener()', function () {
  let element, returnedValue

  beforeEach(function () {
    require('basichtml').init()
    element = document.createElement('p')

    returnedValue = R.pipe(
      addEventListener('click', (e) => e, {})
    )(element)
  })

  it('should add an event listener to an element', function () {
    // expect(returnedValue).to.have.class('test-class')
  })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
