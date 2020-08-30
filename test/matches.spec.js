const {
  matches,
  addClass,
  createElement,
  append
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('matches()', function () {
  let element, returnedValue

  beforeEach(function () {
    require('basichtml').init()

    element = R.pipe(
      createElement('p'),
      addClass('hello')
    )(document)

    document.body.append(element)

    returnedValue = matches('.hello')(element)
  })

  it('should return whether the element can be matched with the selector string', function () {
    expect(returnedValue).to.be.true
    expect(matches('.world')(element)).to.be.false
  })
})
