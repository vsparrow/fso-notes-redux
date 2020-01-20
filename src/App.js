import React	 from 'react'
import NewNote from './components/NewNote'
import Note from './components/Note'

const App = ({store})=>{	
	return(
		<div>
			<NewNote store={store}/>
			<Note store={store} />
		</div>
	)	
}

export default App