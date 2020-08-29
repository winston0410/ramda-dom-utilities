
import * as R from 'ramda'

const after = R.curry((el, targetEl) => {
  targetEl.after(el)
  return targetEl
})

export {
  after
}
