import axios from "axios"

const API = axios.create(process.env.baseURL || 5000)

//User Crud
export const createUser = (newUser) => API.post('/api/users/', newUser)
export const readUsers = () => API.get('/api/users/')
export const updateUser = (id, updatedUser) => API.patch(`/api/users/${id}`, updatedUser)
export const deleteUser = (id) => API.delete(`/api/users/${id}`)