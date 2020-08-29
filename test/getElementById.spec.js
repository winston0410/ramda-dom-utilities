const {
  getElementById,
  createElement,
  setAttribute
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('getElementById()', function () {
  let element, returnedValue

  beforeEach(function () {
    require('basichtml').init()

    element = R.pipe(
      createElement('p'),
      setAttribute('id')('test-id')
    )(document)

    document.body.append(element)

    returnedValue = getElementById('test-id')(document)
  })

  it('should return the selected element', function () {
    expect(returnedValue).to.equal(element)
  })
})
