import axios from "axios"

const API = axios.create(process.env.baseURL || 5000)

//PMs CRUD
export const createPM = (newPM) => API.post('/api/pms/', newPM)
export const readPMs = () => API.get('/api/pms/')
export const updatePM = (id, updatedPM) => API.patch(`/api/pms/${id}`, updatedPM)
export const deletePM = (id) => API.delete(`/api/pms/${id}`)