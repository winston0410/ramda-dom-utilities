import * as R from 'ramda'

const pathLens = R.pipe(
  R.split('.'),
  R.tap(console.log),
  R.lensPath
)

export {
  pathLens
}
