import React from 'react'
import {connect} from 'react-redux'
import Note from './Note'
import { toggleImportanceOf} from '../reducers/noteReducer'

const Notes = ({notes, filter, ...props})=>{
// const Notes = ({store})=>{
	// const {notes, filter} = store.getState()
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
}
const mapStateToProps = state => ({notes: state.notes, filter: state.filter})
const mapDispatchToProps = {toggleImportanceOf}
// export default Notes //before connect
// connect function  used forso the Redux store can be "mapped" into the component's props.
export default connect(mapStateToProps, mapDispatchToProps)(Notes)