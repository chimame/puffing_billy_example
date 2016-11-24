import { createStore } from 'redux'
import sampleReducer from '../reducers/Sample'

export default (preloadState = {samples: []}) => {
  return createStore(sampleReducer, {...preloadState})
}
