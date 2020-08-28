import * as R from 'ramda'

const querySelector = R.curry(
  (target, el) => el.querySelectorAll(target)
)

export {
  querySelector
}
