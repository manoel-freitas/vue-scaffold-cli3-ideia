import { SET_STATE } from './mutation-types'

export default {
  // we can use the ES2015 computed property name feature
  // to use a constant as the function name
  // do not use object destruction here
  [SET_STATE] (state, payload) {
    state.someState = payload
  }
}
