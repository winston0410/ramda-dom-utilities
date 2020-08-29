const {
  querySelector
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('querySelector()', function () {
  let element, returnedValue

  beforeEach(function () {
    require('basichtml').init()
    element = document.createElement('p')
    document.body.append(element)

    returnedValue = querySelector('p')(document)
  })

  it('should return the selected element', function () {
    expect(returnedValue).to.equal(element)
  })
})
