
import * as R from 'ramda'

// NOTE:  Should return the target itselfs or the inserted element?
const before = R.curry((el, targetEl) => {
  targetEl.before(el)
  return targetEl
})

export {
  before
}
