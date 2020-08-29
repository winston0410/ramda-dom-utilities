const {
  getElementsByClassName
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('getElementsByClassName()', function () {
  let element, returnedValue

  beforeEach(function () {
    require('basichtml').init()
  })

  // it('should return the selected element', function () {
  //   expect(returnedValue).to.equal(element)
  // })
})
