import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = async ()=>{
	const respose = await axios.get(baseUrl)
	return respose.data
}

export default {getAll}