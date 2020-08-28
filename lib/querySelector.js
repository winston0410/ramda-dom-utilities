import * as R from 'ramda'

const querySelectorAll = R.curry(
  (target, el) => el.querySelector(target)
)

export {
  querySelectorAll
}
