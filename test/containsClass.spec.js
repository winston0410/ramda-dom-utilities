const {
  addClass,
  containsClass
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')
require('basichtml').init()

describe('containsClass()', function () {
  let element, returnedValue

  beforeEach(function () {
    element = document.createElement('p')

    returnedValue = R.pipe(
      addClass('test-class'),
      containsClass('test-class')
    )(element)
  })

  it('should reflect if an element has a class', function () {
    expect(returnedValue).to.be.true
  })
})
