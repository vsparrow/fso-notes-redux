import React from 'react'

const Note = (props)=>{
	
	return(
		<div onClick={props.handleClick}>
			{props.note.content} 
			<strong>{props.note.important ? 'important' : ''}</strong>		
		</div>
	)
}

export default Note