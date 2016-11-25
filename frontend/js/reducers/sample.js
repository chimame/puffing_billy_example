import { handleActions } from 'redux-actions'

export const initialState = {count: 0}

const reducerMap = {
  GET_SAMPLES(state, action) {
    return {...state, samples: action.payload.test}
  },
}

export default handleActions(reducerMap, initialState)
