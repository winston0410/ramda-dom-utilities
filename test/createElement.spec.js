const {
  createElement,
  append
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('createElement()', function () {
  let element, returnedValue

  beforeEach(function () {
    require('basichtml').init()

    returnedValue = createElement('p')(document)

    append(returnedValue, document.body)
  })

  it('should create and return an element', function () {
    expect(document.querySelector('p')).to.exist
    expect(returnedValue).to.have.tagName('p')
    expect(returnedValue).to.equal(document.querySelector('p'))
  })
})
