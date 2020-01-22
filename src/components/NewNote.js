import React from 'react'
import {connect} from 'react-redux'
//only referenced by connect, dont call createNote directly
import {createNote} from '../reducers/noteReducer' 


const NewNote = (props)=>{
	
	const addNote = (event)=>{
		event.preventDefault()
		const content = event.target.note.value
		props.createNote(content) //now app does not need to know how store works
		event.target.note.value=''
	}	
	return(
		<form onSubmit={addNote}> 
			<input name='note' />
			<button type='submit'>add</button>
		</form>
	)
}

// export default NewNote
//null passed because component does not need to access stores state
export default connect(null,{createNote})(NewNote)
//props.createNote has the automathic dispath added by connect