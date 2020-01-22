import React from 'react'
import {connect} from 'react-redux'
import {filterChange} from '../reducers/filterReducer'

const VisibilityFilter = (props)=>{
	const radioSelection = {type: 'radio', name: 'filter'}
	return(
		<div>
			all <input {...radioSelection} onChange={()=>props.filterChange('ALL')}/>
			important <input {...radioSelection} onChange={()=>props.filterChange('IMPORTANT')}/>
			nonimportant <input {...radioSelection} onChange={()=>props.filterChange('NONIMPORTANT')}/>
		</div>	
	)
}

export default connect(null,{filterChange})(VisibilityFilter)