import * as R from 'ramda'

const readProp = R.curry((fn, el) => el[fn])

export {
  readProp
}
