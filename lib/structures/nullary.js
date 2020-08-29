import * as R from 'ramda'

const nullary = R.curry(
  (fn, el) => R.defaultTo(el)(el[fn]())
)

export {
  nullary
}
