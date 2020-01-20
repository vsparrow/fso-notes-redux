import React from 'react'
import { toggleImportanceOf} from '../reducers/noteReducer'

const Note = ({store})=>{
	const {notes, filter} = store.getState()
	// console.log(notes)
	const notesToShow = () =>{
		if(filter === 'ALL') {return notes}
		if(filter === 'IMPORTANT'){return notes.filter(n=>n.important)}
		return notes.filter(n=>!n.important) //filter === 'NOT_IMPORTANT'
	}
	
	const toggleImportance = id => store.dispatch(toggleImportanceOf(id))
	return(
			<ul>
				{notesToShow().map(note => 
					<li key={note.id} onClick={()=>toggleImportance(note.id)}>
						{note.content} 
						<strong>
							{note.important ? 'important' : ''}
						</strong>
					</li>
				)}
			</ul>	
	)
}

export default Note