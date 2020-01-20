import React, {useState} from 'react';
import {createStore} from 'redux'
import './App.css';
//*************************************************************
// const counterReducer = (state = 0,action) => {  //defined in index for now
// 	switch(action.type){
// 		case 'INCREMENT':
// 			return state + 1
// 		case 'DECREMENT':
// 			return state - 1
// 		case 'ZERO':
// 			return 0
// 		default: //if non of the above mathes
// 		return state
// 	}
// }

// const store = createStore(counterReducer)
//*************************************************************
//a sucscription would perform a call everytime there is a change in the store
// store.subscribe(()=>{
// 	const storeNow = store.getState()
// 	console.log(storeNow)
// })
//*************************************************************
// // console.log(store.getState())
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})
// // console.log(store.getState())
// store.dispatch({type: 'ZERO'})
// store.dispatch({type: 'DECREMENT'})
// // console.log(store.getState())
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})
// // console.log(store.getState())
//*************************************************************
const useField = (type)=>{
	const [value,setValue] = useState('')
	const onChange=(event)=>{setValue(event.target.value)}
	return {type,value,onChange}
}

//*************************************************************
const App = () => {
  const name = useField('text')// const [name, setName] = useState('')
  const born = useField('date')// const [born, setBorn] = useState('')
  const height = useField('height')// const [height, setHeight] = useState('')
	
  return (
    <div>
      <form>
        name:  <input {...name}/> 
        <br/> 
        birthdate: <input {...born} />
        <br /> 
        height: <input {...height}/>
      </form>
      <div>
        {name.value} {born.value} {height.value} 
      </div>
    </div>
  )
}

export default App;
