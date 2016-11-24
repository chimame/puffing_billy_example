import { createAction } from 'redux-actions'
import { exampleApi } from '../apis/example'

export const GET_SAMPLES = 'GET_SAMPLES'

export const getSamples = createAction(GET_SAMPLES, exampleApi)
