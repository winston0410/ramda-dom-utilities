import * as R from 'ramda'

const removeAttribute = R.curry(
  (value, el) => {
    el.removeAttribute(value)
    return el
  }
)

export {
  removeAttribute
}
