import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux'
import App from './App';
import noteReducer from './reducers/noteReducer'
// import noteReducer, {createNote} from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
// import filterReducer, {filterChange} from './reducers/filterReducer'

const reducer = combineReducers({notes: noteReducer, filter: filterReducer})

// const store = createStore(noteReducer) //before combine
const store = createStore(reducer)


console.log(store.getState())
const renderApp = ()=>ReactDOM.render(<App store={store}/>,document.getElementById('root'))
// const renderApp = ()=>ReactDOM.render(<div></div>,document.getElementById('root'))
renderApp()
store.subscribe(renderApp)

////
// store.subscribe(()=>console.log(store.getState()))
// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))
////////