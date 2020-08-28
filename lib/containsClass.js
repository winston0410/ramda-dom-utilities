import * as R from 'ramda'

const containsClass = R.curry(
  (className, item) => item.classList.contains(className)
)

export {
  containsClass
}
