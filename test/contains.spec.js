const {
  contains,
  append
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { document } = (new JSDOM('...')).window

describe('contains()', function () {
  let element, elementToAppend, elementToNotAppend

  beforeEach(function (done) {
    element = document.createElement('p')

    document.body.append(element)

    elementToAppend = document.createElement('span')

    elementToNotAppend = document.createElement('div')

    append(elementToAppend)(element)
    append(elementToNotAppend)(document.body)

    done()
  })

  it('should return whether the element contains a node', function (done) {
    expect(contains(elementToAppend)(element)).to.be.true
    expect(contains(elementToNotAppend)(element)).to.be.false

    done()
  })
})
