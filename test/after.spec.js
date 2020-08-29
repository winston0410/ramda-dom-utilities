const {
  after
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('after()', function () {
  let element, returnedValue, elementToInsertBefore

  beforeEach(function () {
    require('basichtml').init()

    element = document.createElement('p')

    elementToInsertBefore = document.createElement('span')

    returnedValue = R.pipe(
      after(elementToInsertBefore)
    )(element)
  })

  // it('should add the target to the DOM as the next sibling of the element', function () {
  //
  // })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
