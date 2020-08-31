const {
  getElementsByTagName,
  addClass,
  createElement
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('getElementsByTagName()', function () {
  let element, returnedValue, elementToFail

  beforeEach(function () {
    require('basichtml').init()

    element = R.pipe(
      createElement('p')
    )(document)

    elementToFail = R.pipe(
      createElement('span')
    )(document)

    document.body.append(element)
    document.body.append(elementToFail)

    returnedValue = getElementsByTagName('p')(document)
  })

  it('should return the selected element', function () {
    expect(returnedValue).to.include(element)
    expect(returnedValue).to.not.include(elementToFail)
  })
})
