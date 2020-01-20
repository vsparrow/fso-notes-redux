import React from 'react'
import { toggleImportanceOf} from '../reducers/noteReducer'

const Note = ({store})=>{
	const toggleImportance = id => store.dispatch(toggleImportanceOf(id))
	return(
			<ul>
				{store.getState().notes.map(note => 
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