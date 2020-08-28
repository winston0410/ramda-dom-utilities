import * as R from 'ramda'

const querySelector = R.curry(
  (target, el) => el.querySelector(target)
)

export {
  querySelector
}
