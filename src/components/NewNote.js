import React from 'react'
import {createNote} from '../reducers/noteReducer'

const NewNote = ({store})=>{
	
	const addNote = (event)=>{
		event.preventDefault()
		const content = event.target.note.value
		store.dispatch(createNote(content)) //now app does not need to know how store works
		event.target.note.value=''
	}	
	return(
		<form onSubmit={addNote}>
			<input name='note' />
			<button type='submit'>add</button>
		</form>
	)
}

export default NewNote