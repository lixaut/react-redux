
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from 'store/reducers'
import {
  legacy_createStore as createStore,
  applyMiddleware
} from 'redux'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))