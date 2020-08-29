import * as R from 'ramda'

const querySelectorAll = R.curry(
  (target, el) => el.querySelectorAll(target)
)

export {
  querySelectorAll
}
