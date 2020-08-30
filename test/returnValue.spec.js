const {
  returnValue,
  append
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('replaceWith()', function () {
  let element, returnedValue, elementToReplace

  beforeEach(function () {
    require('basichtml').init()

    element = document.createElement('p')

    returnedValue = append(element)(document.body)
  })

  it('should return parameter of a function based on parameter number', function () {
    // expect(returnedValue).to.equal(element)
  })
})
