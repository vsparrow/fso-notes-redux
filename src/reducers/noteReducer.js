import noteService from '../services/notes'
//we will get state from backend
// const initialState = [
//   {
//     content: 'reducer defines how redux store works',
//     important: true,
//     id: 1,
//   },
//   {
//     content: 'state of store can contain any data',
//     important: false,
//     id: 2,
//   },
// ]


const noteReducer = (state=[], action)=>{
	switch(action.type){
		case 'NEW_NOTE':
			// return state.concat(action.data)
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

//helper
// const generateId = ()=>Number((Math.random()* 1000000).toFixed(0))

//action creators
export const createNote = content => ({type: 'NEW_NOTE', data: {content, important: false, }})
export const toggleImportanceOf = id =>({type: 'TOGGLE_IMPORTANCE', data: {id}})
export const initializeNotes = ()=>{ 
	return async dispatch => {
		const notes = await noteService.getAll()
		dispatch({type: 'INIT_NOTES',data: notes})
	}
}

export default noteReducer