import * as R from 'ramda'

const removeClass = R.curry(
  (className, item) => R.tap(item.classList.remove)(className)
)

export {
  removeClass
}
