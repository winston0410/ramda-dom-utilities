import * as R from 'ramda'

const pathLens = (layer = Infinity) => R.pipe(
  R.split('.'),
  R.slice(0, layer),
  R.lensPath
)

const getFn = R.curry(
  (fnPath, el) => R.pipe(
    R.juxt([pathLens(), pathLens(-1)]),
    R.map(R.view),
    R.map(R.applyTo(el)),
    R.apply(R.bind) // Bind the function's parent to prevent error
  )(fnPath)
)

export {
  pathLens,
  getFn
}
