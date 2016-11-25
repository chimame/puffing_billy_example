import { createStore, applyMiddleware } from 'redux'
import sampleReducer from '../reducers/Sample'
import promiseMiddleware from 'redux-promise'

export default (preloadState = {samples: []}) => {
  return createStore(sampleReducer, {...preloadState}, applyMiddleware(promiseMiddleware))
}
