const {
  prepend
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('prepend()', function () {
  let element, returnedValue, elementToPrepend

  beforeEach(function () {
    require('basichtml').init()

    element = document.createElement('p')

    document.body.prepend(element)

    elementToPrepend = document.createElement('span')

    returnedValue = R.pipe(
      prepend(elementToPrepend)
    )(element)
  })

  it('should prepend the target to the element as its child', function () {
    expect(element).to.have.descendant('span')
    expect(element).to.have.length(1)
  })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
