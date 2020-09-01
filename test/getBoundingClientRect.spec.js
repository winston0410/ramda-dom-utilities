const {
  getBoundingClientRect
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('getBoundingClientRect()', function () {
  let element, returnedValue, elementToFail

  beforeEach(function () {
    require('basichtml').init()
    element = document.createElement('p')

    document.body.append(element)

    // TODO: jsdom doesn't support getBoundingClientRect
    // element.getBoundingClientRect()

    //
    // returnedValue = R.pipe(
    //   getBoundingClientRect
    // )(element)

    // console.log(returnedValue)
  })

  it('should whether the element has any attribute or not', function () {
    // expect(returnedValue).to.contains('id')
  })
})
