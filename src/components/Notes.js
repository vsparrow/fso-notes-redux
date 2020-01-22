import React from 'react'
import Note from './Note'
import { toggleImportanceOf} from '../reducers/noteReducer'

const Notes = ({store})=>{
	const {notes, filter} = store.getState()
	const notesToShow = () =>{
		if(filter === 'ALL') {return notes}
		if(filter === 'IMPORTANT'){return notes.filter(n=>n.important)}
		return notes.filter(n=>!n.important) //filter === 'NOT_IMPORTANT'
	}
	
	// const toggleImportance = id => store.dispatch(toggleImportanceOf(id))
	return(
			<ul>
				{notesToShow().map(note => 
					<Note 
						key={note.id} 
						note={note} 
						handleClick={ ()=>store.dispatch(toggleImportanceOf(note.id)) }
					>
					</Note>
				)}
			</ul>	
	)
}

export default Notes