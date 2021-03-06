const {
  getAttributeNames,
  setAttribute
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('getAttributeNames()', function () {
  let element, returnedValue, elementToFail

  beforeEach(function () {
    require('basichtml').init()
    element = document.createElement('p')

    returnedValue = R.pipe(
      setAttribute('id', 'unique'),
      getAttributeNames
    )(element)
  })

  it('should whether the element has any attribute or not', function () {
    expect(returnedValue).to.contains('id')
  })
})
