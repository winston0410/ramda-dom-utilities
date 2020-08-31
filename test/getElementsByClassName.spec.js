const {
  getElementsByClassName,
  addClass,
  createElement
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('getElementsByClassName()', function () {
  let element, returnedValue, elementToFail

  beforeEach(function () {
    require('basichtml').init()

    element = R.pipe(
      createElement('p'),
      addClass('test-class')
    )(document)

    elementToFail = R.pipe(
      createElement('p'),
      addClass('excluded-class')
    )(document)

    document.body.append(element)

    returnedValue = getElementsByClassName('test-class')(document)
  })

  it('should return the selected element', function () {
    expect(returnedValue).to.include(element)
    expect(returnedValue).to.not.include(elementToFail)
  })
})
