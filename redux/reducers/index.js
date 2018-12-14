import { combineReducers } from 'redux'

import map from './mapReducer'
import storage from './storageReducer'

export default combineReducers({
    map,
    storage,
})
