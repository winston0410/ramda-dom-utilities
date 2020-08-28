import * as R from 'ramda'

const setAttribute = R.curry(
  (attr, value, el) => {
    el.setAttribute(attr, value)
    return el
  }
)

export {
  setAttribute
}
