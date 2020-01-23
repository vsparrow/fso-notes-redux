import axios from 'axios'

const baseUrl = 'http://korea-ide-api-3001.run.goorm.io/notes'

const getAll = async ()=>{
	const respose = await axios.get(baseUrl)
	return respose.data
}

export default {getAll}