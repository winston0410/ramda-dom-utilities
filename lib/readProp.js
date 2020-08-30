import * as R from 'ramda'

const readProp = R.curry((fn, el) => {
  return el[fn]
})

export {
  readProp
}
