import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// redux-thunk, define action creators that treturn a function having the dispatch-method 
// of redux-store as its parameter. 

import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({notes: noteReducer, filter: filterReducer})
const store = createStore(reducer, applyMiddleware(thunk))

export default store