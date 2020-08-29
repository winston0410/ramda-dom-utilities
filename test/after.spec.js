const {
  after
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')
require('basichtml').init()

describe('after()', function () {
  let element, returnedValue, elementToInsertBefore

  beforeEach(function () {
    element = document.createElement('p')

    elementToInsertBefore = document.createElement('span')

    returnedValue = R.pipe(
      after(elementToInsertBefore)
    )(element)
  })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
