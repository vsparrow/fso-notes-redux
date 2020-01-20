const filterReducer = (state = 'ALL', action) => {
	// console.log('filterReducer ACTION: ', action)
	switch(action.type){
		case 'SET_FILTER':
			return action.filter
		default:
			return state
	}
}

//action creator
export const filterChange = filter => ({type: 'SET_FILTER', filter})

export default filterReducer