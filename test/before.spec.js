const {
  before
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')
require('basichtml').init()

describe('before()', function () {
  let element, returnedValue, elementToInsertBefore

  beforeEach(function () {
    element = document.createElement('p')

    elementToInsertBefore = document.createElement('span')

    returnedValue = R.pipe(
      before(elementToInsertBefore)
    )(element)
  })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
