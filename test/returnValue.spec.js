const {
  returnValue,
  append
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('replaceWith()', function () {
  let element, returnedValue, returnedValue2

  beforeEach(function () {
    require('basichtml').init()

    element = document.createElement('p')

    // returnedValue = returnValue(0, append)(element)(document.body)
    // returnedValue2 = returnValue(0, append)(element, document.body)
    // returnedValue2 = returnValue(0, append)
  })

  it('should return parameter of a function based on parameter number', function () {
    const test = (a1) => (a2) => a1
    const foo = 'bar'
    const hello = 'world'

    console.log(returnValue(1)(test)(foo)(hello))

    // expect(
    //
    // ).to.equal(hello)

    // expect(returnedValue).to.equal(element)
    // expect(returnedValue2).to.equal(element)
  })
})
