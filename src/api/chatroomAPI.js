import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000/api/chatrooms"})

//Chatrooms CRUD
export const createChatroom = (newChatroom) => API.post('/', newChatroom)
export const readChatroom = () => API.get('/')
export const updateChatroom = (id, updatedChatroom) => API.patch(`/${id}`)
export const deleteChatrrom = (id) => API.delete(`/${id}`)