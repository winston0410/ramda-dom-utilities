import * as R from 'ramda'

const removeClass = R.curry((className, item) => {
  item.classList.remove(className)
  return item
})

export {
  removeClass
}
