import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000/api/pms"})

//PMs CRUD
export const createPM = (newPM) => API.post('/', newPM)
export const readPMs = () => API.get('/')
export const updatePM = (id, updatedPM) => API.patch(`/${id}`, updatedPM)
export const deletePM = (id) => API.delete(`/${id}`)