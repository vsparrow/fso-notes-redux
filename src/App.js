import React	 from 'react'
import NewNote from './components/NewNote'
import Note from './components/Note'
import VisibilityFilter from './components/VisibilityFilter'

const App = ({store})=>{

	return(
		<div>
			<NewNote store={store}/>
			<VisibilityFilter store={store} />
			<Note store={store} />
		</div>
	)	
}
// important   <input type="radio" name="filter" onChange={filterSelected('IMPORTANT')} />          nonimportant <input type="radio" name="filter" onChange={filterSelected('NONIMPORTANT')} />


export default App