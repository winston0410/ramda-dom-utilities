// const {
//   insertAdjacentElement,
//   append,
//   createElement
// } = require('../index.js')
// const chai = require('chai')
// const expect = chai.expect
// chai.use(require('chai-dom'))
// const R = require('ramda')
//
// const jsdom = require('jsdom')
// const { JSDOM } = jsdom
// const dom = new JSDOM('<html><body></body></html>')
//
// global.document = dom.window.document
// global.window = dom.window
// global.navigator = dom.window.navigator
//
// describe('insertAdjacentElement()', function () {
//   let element, returnedValue
//
//   beforeEach(function () {
//     element = document.createElement('span')
//   })
//
//   it('should add the target as child node with "afterbegin" as position', function () {
//     // const testElement = createElement('p')(document)
//     //
//     // const result = document.body.insertAdjacentElement('afterbegin', testElement)
//     //
//     // console.log(result)
//
//     const returnedValue = insertAdjacentElement('afterbegin')(element)(document.body)
//     //
//     // console.log(returnedValue)
//
//     // expect(document.body).to.have.descendant('span')
//     // expect(document.body).to.have.length(1)
//   })
//
//   it('should return the inserted element', function () {
//     // expect(returnedValue).to.eql(element)
//   })
// })
