import React	 from 'react'
import {createNote, toggleImportanceOf} from './reducers/noteReducer'
//below notes   //*********************************************************

const App = ({store})=>{	

	
	const addNote = (event)=>{
		event.preventDefault()
		const content = event.target.note.value
		// store.dispatch({type:'NEW_NOTE',data:{content, important:false,id: generateId()}}) //before action creators
		store.dispatch(createNote(content)) //now app does not need to know how store works
		event.target.note.value=''
	}	
	
	const toggleImportance = id => store.dispatch(toggleImportanceOf(id))

	
	return(
		<div>
			<form onSubmit={addNote}>
				<input name='note' />
				<button type='submit'>add</button>
			</form>
			<ul>
				{store.getState().map(note => 
					<li key={note.id} onClick={()=>toggleImportance(note.id)}>
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

export default App