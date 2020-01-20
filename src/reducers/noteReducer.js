const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2,
  },
]


const noteReducer = (state=initialState, action)=>{
	// console.log('noteReducer ACTION: ', action)	
	switch(action.type){
		case 'NEW_NOTE':
			// return state.concat(action.data)
			return [...state, action.data]
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
const generateId = ()=>Number((Math.random()* 1000000).toFixed(0))

//action creators
export const createNote = content => ({type: 'NEW_NOTE', data: {content, important: false, id: generateId()}})
export const toggleImportanceOf = id =>({type: 'TOGGLE_IMPORTANCE', data: {id}})



export default noteReducer