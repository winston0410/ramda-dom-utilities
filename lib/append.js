import * as R from 'ramda'

// NOTE:  Should return the target itselfs or the inserted element?
const append = R.curry((el, targetEl) => {
  targetEl.append(el)
  return targetEl
})

export {
  append
}
