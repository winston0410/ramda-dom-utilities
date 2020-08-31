const {
  returnValue
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

describe('returnValue()', function () {
  const doSomething = (...args) => args
  const fn = (a, b, c, d) => doSomething(a, b, c, d)
  const cFn = a => (b, c, ...args1) => (d, ...args2) => doSomething(a, b, c, ...args1, d, ...args2)
  const a = { A: 1 }
  const b = 2
  const c = [3]
  const d = 4
  const e = '5'
  const f = 6
  const g = true

  it('should return parameters of a curried function based on parameters indices', function () {
    expect(returnValue(fn, [1, 3])(a, b, c, d)).to.have.deep.ordered.members([b, d])
    expect(returnValue(R.curry(fn), [0, 3, 4])(a)(b, c, d)).to.have.deep.ordered.members([a, d])
    expect(returnValue(R.curry(fn), [0, 1, 2, 3])(a)(b, c)(d)).to.have.deep.ordered.members([a, b, c, d])
  })

  it('should return result of the curried function if no indices are specified', function () {
    expect(returnValue(fn)(a, b, c, d)).to.have.deep.ordered.members(fn(a, b, c, d))
    expect(returnValue(fn, [])(a, b, c, d)).to.have.deep.ordered.members(fn(a, b, c, d))
    expect(returnValue(R.curry(fn))(a)(b)(c)(d)).to.have.deep.ordered.members(fn(a, b, c, d))
  })

  it('should return parameters of a manually curried function based on parameters indices', function () {
    expect(returnValue(cFn, [1, 3])(a)(b, c, d)(e, f, g)).to.have.deep.ordered.members([b, d])
    expect(returnValue(cFn, [0, 3, 4, 5, 7])(a)(b, c)(d, e, f, g)).to.have.deep.ordered.members([a, d, e, f])
    expect(returnValue(cFn, [0, 1, 2, 3, 4, 5, 6])(a)(b, c, d, e, f)(g)).to.have.deep.ordered.members([a, b, c, d, e, f, g])
  })

  it('should return result of the manually curried function if no indices are specified', function () {
    expect(returnValue(cFn)(a)(b, c, d)(e, f, g)).to.have.deep.ordered.members(cFn(a)(b, c, d)(e, f, g))
    expect(returnValue(cFn, [])(a)(b, c, d)(e, f, g)).to.have.deep.ordered.members(cFn(a)(b, c, d)(e, f, g))
    expect(returnValue(cFn)(a)(b, c, d, e)(f, g)).to.have.deep.ordered.members(cFn(a)(b, c, d, e)(f, g))
  })
})
