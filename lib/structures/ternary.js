import * as R from 'ramda'

const ternary = R.curry(
  (fn, var1, var2, var3, el) => {
    return R.defaultTo(el)(el[fn](var1, var2, var3))
  }
)

export {
  ternary
}
