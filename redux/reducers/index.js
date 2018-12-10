import { combineReducers } from 'redux'

import test from './testReducer'
import map from './mapReducer'

export default combineReducers({
    test,
    map,
})
