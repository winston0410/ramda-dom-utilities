const {
  removeClass
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
require('basichtml').init()

describe('removeClass()', function () {
  let element

  beforeEach(function () {
    element = document.createElement('p')
  })

  it('should remove a class from element', function () {
    console.log(removeClass)
  })

  it('should return the element itself', function () {

  })
})
