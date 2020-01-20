import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import App from './App';
import noteReducer from './reducers/noteReducer'

const store = createStore(noteReducer)

const note1 = {    content: 'the app state is in redux store',    important: true,    id: 1  }
const note2 = {    content: 'state changes are made with actions',    important: false,    id: 2  }
store.dispatch({type: 'NEW_NOTE', data: note1})
store.dispatch({type: 'NEW_NOTE', data: note2})
		

const renderApp = ()=>ReactDOM.render(<App store={store}/>,document.getElementById('root'))
renderApp()
store.subscribe(renderApp)
