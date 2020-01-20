import React	 from 'react'
import NewNote from './components/NewNote'
import Note from './components/Note'

const App = ({store})=>{
	const radioSelection = {type: 'radio', name: 'filter'}
	const filterSelected = value => () => {console.log(value)}
	return(
		<div>
			<NewNote store={store}/>
			<div>
				all <input type='radio' name='filter' onChange={filterSelected('ALL')}/>
				important <input {...radioSelection} onChange={filterSelected('IMPORTANT')}/>
				nonimportant <input {...radioSelection} onChange={filterSelected('NONIMPORTANT')}/>
			</div>
			<Note store={store} />
		</div>
	)	
}
// important   <input type="radio" name="filter" onChange={filterSelected('IMPORTANT')} />          nonimportant <input type="radio" name="filter" onChange={filterSelected('NONIMPORTANT')} />


export default App