const {
  toggleAttribute,
  setAttribute,
  hasAttribute,
  append
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('toggleAttribute()', function () {
  let element, returnedValue

  beforeEach(function () {
    require('basichtml').init()
    element = document.createElement('p')

    append(returnedValue, document.body)

    returnedValue = setAttribute('hidden', 'true')(element)

    // TODO: test disabled, as jsdom does not support toggleAttribute
    // element.toggleAttribute('hidden')
    // toggleAttribute('hidden')(element)
  })

  it('should toggle the attribute, from true to false and vice verse', function () {
    // expect(hasAttribute('hidden')(element)).to.be.false
  })
})
