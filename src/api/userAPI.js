import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000/api/users"})

//User Crud
export const createUser = (newUser) => API.post('/', newUser)
export const readUsers = () => API.get('/')
export const updateUser = (id, updatedUser) => API.patch(`/${id}`, updatedUser)
export const deleteUser = (id) => API.delete(`/${id}`)