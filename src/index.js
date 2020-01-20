import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import noteReducer from './reducers/noteReducer'
// import App from './App';

// const counterReducer = (state=0,action) => {
// 	switch(action.type){
// 		case 'INCREMENT':
// 			return state + 1
// 		case 'DECREMENT':
// 			return state - 1
// 		case 'ZERO':
// 			return 0
// 		default:
// 			return state
// 	}
// }

// const store = createStore(counterReducer)

// const App = ()=>{
// 	return (
// 		<div>
// 			<div>{store.getState()}</div>
// 			<button onClick={e=> store.dispatch({type: 'INCREMENT'})}>plus</button>
// 			<button onClick={e=> store.dispatch({type: 'DECREMENT'})}>minus</button>
// 			<button onClick={e=> store.dispatch({type: 'ZERO'})}>zero</button>
// 		</div>	
// 	)
// }//app

// const renderApp = ()=> ReactDOM.render(<App />, document.getElementById('root'))

// renderApp()
// store.subscribe(renderApp)
//above counter //*********************************************************
//below notes   //*********************************************************
const note1 = {    content: 'the app state is in redux store',    important: true,    id: 1  }
const note2 = {    content: 'state changes are made with actions',    important: false,    id: 2  }
const store = createStore(noteReducer)


store.dispatch({type: 'NEW_NOTE', data: note1})
store.dispatch({type: 'NEW_NOTE', data: note2})

const generateId = ()=>Number((Math.random()* 1000000).toFixed(0))
//action creators
const createNote = content => ({type: 'NEW_NOTE', data: {content, important: false, id: generateId()}})
const toggleImportanceOf = id => ({type: 'TOGGLE_IMPORTANCE', data: {id}})

const App = ()=>{	
	const addNote = (event)=>{
		event.preventDefault()
		const content = event.target.note.value
		// store.dispatch({type:'NEW_NOTE',data:{content, important:false,id: generateId()}}) //before action creators
		store.dispatch(createNote(content)) //now app does not need to know how store works
		event.target.note.value=''
	}	
	// const toggleImportance = id => () => store.dispatch({type: 'TOGGLE_IMPORTANCE', data: {id}})
	const toggleImportance = id => () => store.dispatch(toggleImportanceOf(id))

	
	return(
		<div>
			<form onSubmit={addNote}>
				<input name='note' />
				<button type='submit'>add</button>
			</form>
			<ul>
				{store.getState().map(note => 
					<li key={note.id} onClick={toggleImportance(note.id)}>
						{note.content} 
						<strong>
							{note.important ? 'important' : ''}
						</strong>
					</li>
				)}
			</ul>
		</div>
	)	
}

const renderApp = ()=>ReactDOM.render(<App />, document.getElementById('root'))
renderApp()
store.subscribe(renderApp)