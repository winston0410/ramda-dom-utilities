const {
  setProp
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('setProp()', function () {
  let element, returnedValue

  beforeEach(function () {
    require('basichtml').init()
    element = document.createElement('p')

    returnedValue = R.pipe(
      setProp('textContent')('Example text'),
      setProp('id')('unique-id')
    )(element)
  })

  it('should change properties of an element', function () {
    expect(returnedValue).to.have.id('unique-id')
    expect(returnedValue).to.contain.text('Example text')
  })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
