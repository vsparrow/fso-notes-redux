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

export default App