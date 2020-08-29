const {
  remove
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')
require('basichtml').init()

describe('remove()', function () {
  let element, returnedValue

  beforeEach(function () {
    element = document.createElement('p')

    document.body.append(element)

    returnedValue = R.pipe(
      remove
    )(element)
  })

  it('should remove the element itself from DOM', function () {
    expect(document.body).to.not.contains(returnedValue)
  })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
