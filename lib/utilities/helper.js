import * as R from 'ramda'

const pathLens = R.pipe(
  R.split('.'),
  R.lensPath
)

export {
  pathLens
}
