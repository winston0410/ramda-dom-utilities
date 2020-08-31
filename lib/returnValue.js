import * as R from 'ramda'

const returnValue = R.curry(
  (paramIndice, fn, ...args) => {
    // const fnArgs = []
    // if (args.length > 0) {
    //
    //   return returnValue(paramIndice, fn
    // }

    console.log(args)

    const fnArgs = args

    console.log(fn(...fnArgs))

    // fn(...fnArgs)

    return fnArgs[paramIndice]
  }
)

export {
  returnValue
}
//
// const test = (a1, a2) => a1
// const foo = 'bar'
// const hello = 'world'
