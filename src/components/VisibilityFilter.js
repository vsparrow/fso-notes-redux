import React from 'react'
import {filterChange} from '../reducers/filterReducer'

const VisibilityFilter = ({store})=>{
	const radioSelection = {type: 'radio', name: 'filter'}
	// const filterSelected = value => () => {console.log(value)}	
	const filterSelected = value => () => {
		console.log('filterSelected caled', value)
		store.dispatch(filterChange(value))
	}	
	return(
		<div>
			all <input type='radio' name='filter' onChange={filterSelected('ALL')}/>
			important <input {...radioSelection} onChange={filterSelected('IMPORTANT')}/>
			nonimportant <input {...radioSelection} onChange={filterSelected('NONIMPORTANT')}/>
		</div>	
	)
}

export default VisibilityFilter