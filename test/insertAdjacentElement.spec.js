const {
  insertAdjacentElement,
  append,
  createElement
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('insertAdjacentElement()', function () {
  let element, returnedValue

  beforeEach(function (done) {
    const jsdom = require('jsdom')
    const { JSDOM } = jsdom
    const { document } = (new JSDOM('...')).window

    element = document.createElement('span')
    document.body.append(element)

    done()
  })

  // it('should add the target as child node with "afterbegin" as position', function () {
  //   const testElement = createElement('p')(document)
  //
  //   const result = element.insertAdjacentElement('afterbegin', document.createElement('span'))
  //
  //   console.log(result)
  //
  //   const returnedValue = insertAdjacentElement('afterbegin')(element)(document.body)
  //
  //   expect(document.body).to.have.descendant('span')
  //   expect(document.body).to.have.length(1)
  // })

  // it('should return the inserted element', function () {
  //   // expect(returnedValue).to.eql(element)
  // })
})
