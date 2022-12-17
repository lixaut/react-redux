
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers
} from 'redux'

const allReducer = combineReducers({
  countState: countReducer,
  personState: personReducer
})

export default createStore(allReducer, applyMiddleware(thunk))