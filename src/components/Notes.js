import React from 'react'
import {connect} from 'react-redux'
import Note from './Note'
import { toggleImportanceOf} from '../reducers/noteReducer'

const Notes = (props)=>{	
	// const toggleImportance = id => store.dispatch(toggleImportanceOf(id))
	return(
			<ul>
				{props.visibleNotes.map(note => 
					<Note 
						key={note.id} 
						note={note} 
						handleClick={ ()=>{
							console.log('props is', props);
							return props.toggleImportanceOf(note.id)
							} 
						}
					>
					</Note>
				)}
			</ul>	
	)
}//Notes

//extracted from Notes
const notesToShow = ({notes,filter}) =>{
	if(filter === 'ALL') {return notes}
	if(filter === 'IMPORTANT'){return notes.filter(n=>n.important)}
	return notes.filter(n=>!n.important) //filter === 'NOT_IMPORTANT'
}

const mapStateToProps = state => ({visibleNotes: notesToShow(state)})
const mapDispatchToProps = {toggleImportanceOf}
// export default Notes //before connect
// connect function  used forso the Redux store can be "mapped" into the component's props.
export default connect(mapStateToProps, mapDispatchToProps)(Notes)