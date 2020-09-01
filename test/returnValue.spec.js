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

  it('should return parameters of the function based on the target indices', function () {
    expect(returnValue([1, 3])(fn)(a, b, c, d)).to.have.deep.ordered.members([b, d])
    expect(returnValue([0, 3, 4])(R.curry(fn))(a)(b, c, d)).to.have.deep.ordered.members([a, d])
    expect(returnValue([0, 1, 2, 3])(R.curry(fn))(a)(b, c)(d)).to.have.deep.ordered.members([a, b, c, d])
    expect(returnValue([1, 3])(cFn)(a)(b, c, d)(e, f, g)).to.have.deep.ordered.members([b, d])
    expect(returnValue([0, 3, 4, 5, 7])(cFn)(a)(b, c)(d, e, f, g)).to.have.deep.ordered.members([a, d, e, f])
    expect(returnValue([0, 1, 2, 3, 4, 5, 6])(cFn)(a)(b, c, d, e, f)(g)).to.have.deep.ordered.members([a, b, c, d, e, f, g])
  })

  it('should act as same as the function if target indices are not an array of numbers', function () {
    expect(returnValue([])(fn)(a, b, c, d)).to.have.deep.ordered.members(fn(a, b, c, d))
    expect(returnValue('abc')(fn)(a, b, c, d)).to.have.deep.ordered.members(fn(a, b, c, d))
    expect(returnValue(['a'])(R.curry(fn))(a)(b)(c)(d)).to.have.deep.ordered.members(R.curry(fn)(a)(b)(c)(d))
    expect(returnValue('def')(R.curry(fn))(a)(b)(c)(d)).to.have.deep.ordered.members(R.curry(fn)(a)(b)(c)(d))
    expect(returnValue({ z: 9 })(cFn)(a)(b, c, d)(e, f, g)).to.have.deep.ordered.members(cFn(a)(b, c, d)(e, f, g))
    expect(returnValue(null)(cFn)(a)(b, c, d, e)(f, g)).to.have.deep.ordered.members(cFn(a)(b, c, d, e)(f, g))
  })

  it('should return the second parameter if it is not a function', function () {
    expect(returnValue([])(a)).to.eql(a)
    expect(returnValue([0, 2])(a)).to.eql(a)
  })
})
