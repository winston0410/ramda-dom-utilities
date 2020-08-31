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
  let element, returnedValue

  beforeEach(function () {
    require('basichtml').init()

    element = R.pipe(
      createElement('p'),
      addClass('test-class')
    )(document)

    document.body.append(element)

    returnedValue = getElementsByClassName('test-id')(document)
  })

  it('should return the selected element', function () {
    expect(returnedValue).to.include(element)
  })
})
