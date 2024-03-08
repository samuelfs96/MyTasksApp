import axios from 'axios'

const api_url = 'http://localhost:8000/tasks/api/v1/tasks'

export const getTasks = async () => await axios.get(api_url + '/')
export const getTask = async (id: string) => await axios.get(api_url + `/${id}/`)
export const deleteTask = async (id: string) => await axios.delete(api_url + `/${id}/`)