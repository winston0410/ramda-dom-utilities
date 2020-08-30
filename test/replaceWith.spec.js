const {
  replaceWith,
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

    document.body.append(element)

    elementToReplace = document.createElement('span')

    returnedValue = replaceWith(elementToReplace)(element)
  })

  it('should replace an element', function () {
    expect(document.body).to.have.descendant('span')
    expect(document.body).to.have.length(1)
  })

  it('should return the element that has been replaced', function () {
    expect(returnedValue).to.equal(element)
  })
})
