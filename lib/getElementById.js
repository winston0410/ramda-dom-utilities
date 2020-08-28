import * as R from 'ramda'

const getElementById = R.curry(
  (target, el) => el.getElementById(target)
)

export {
  getElementById
}
