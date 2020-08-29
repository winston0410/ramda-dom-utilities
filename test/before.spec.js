const {
  before
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('before()', function () {
  let element, returnedValue, elementToInsertBefore

  beforeEach(function () {
    require('basichtml').init()

    element = document.createElement('p')

    document.body.append(element)

    elementToInsertBefore = document.createElement('span')

    returnedValue = R.pipe(
      before(elementToInsertBefore)
    )(element)
  })

  it('should add the target to the DOM as the previous sibling of the element', function () {
    expect(element.previousElementSibling).to.eql(elementToInsertBefore)
  })

  it('should return the element itself', function () {
    expect(returnedValue).to.eql(element)
  })
})
