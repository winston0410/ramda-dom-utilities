const {
  append
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('append()', function () {
  let element, returnedValue, elementToAppend

  beforeEach(function () {
    require('basichtml').init()

    element = document.createElement('p')

    document.body.append(element)

    elementToAppend = document.createElement('span')

    returnedValue = R.pipe(
      append(elementToAppend)
    )(element)
  })

  it('should append the target to the element as its child', function () {
    expect(element).to.have.descendant('span')
    expect(element).to.have.length(1)
  })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
