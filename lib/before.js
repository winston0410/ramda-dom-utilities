
import * as R from 'ramda'

const before = R.curry((el, targetEl) => {
  targetEl.before(el)
  return el
})

export {
  before
}
