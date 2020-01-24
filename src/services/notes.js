import axios from 'axios'

const baseUrl = 'http://korea-ide-api-3001.run.goorm.io/notes'

const getAll = async ()=>{
	const respose = await axios.get(baseUrl)
	return respose.data
}

const createNew = async content => {
	const object = {content, important: false}
	const response = await axios.post(baseUrl, object)
	return response.data
}

export default {getAll, createNew}