import * as TYPES from './mutation-types'

// context
export const action = ({ commit }, payload) => {
  // Commit the mutations
  commit(TYPES.SET_STATE, payload)

  Promise.resolve(payload) // keep promise chain
}
