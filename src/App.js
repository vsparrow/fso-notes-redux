import React	 from 'react'
import { toggleImportanceOf} from './reducers/noteReducer'
import NewNote from './components/NewNote'
//below notes   //*********************************************************

const App = ({store})=>{	
	const toggleImportance = id => store.dispatch(toggleImportanceOf(id))
	return(
		<div>
			<NewNote store={store}/>
			<ul>
				{store.getState().map(note => 
					<li key={note.id} onClick={()=>toggleImportance(note.id)}>
						{note.content} 
						<strong>
							{note.important ? 'important' : ''}
						</strong>
					</li>
				)}
			</ul>
		</div>
	)	
}

export default App