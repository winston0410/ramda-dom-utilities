import * as R from 'ramda'

const setProp = R.curry((fn, value, el) => {
  el[fn] = value
  return el
})

export {
  setProp
}
