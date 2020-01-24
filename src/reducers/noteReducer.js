import noteService from '../services/notes'

const noteReducer = (state=[], action)=>{
	switch(action.type){
		case 'NEW_NOTE':
			return [...state, action.data]
		case 'INIT_NOTES': //get remote data and set to state
			return action.data
		case 'TOGGLE_IMPORTANCE':
			const id = action.data.id
			const noteToChange = state.find(n => n.id === id)
			const changedNote = {...noteToChange, important: !noteToChange.important}
			return state.map(n => n.id !== id ? n : changedNote)
		default:
			return state
	}
}

//action creators
export const toggleImportanceOf = id =>({type: 'TOGGLE_IMPORTANCE', data: {id}})
export const initializeNotes = ()=>{ 
	return async dispatch => {
		const notes = await noteService.getAll()
		dispatch({type: 'INIT_NOTES',data: notes})
	}
}
// export const createNote = content => ({type: 'NEW_NOTE', data: {content, important: false, }}) //old pre-backend
export const createNote = content => {
	return async dispatch =>{
		const newNote = await noteService.createNew(content)
		dispatch({type: 'NEW_NOTE', data:newNote})
	}
}

export default noteReducer