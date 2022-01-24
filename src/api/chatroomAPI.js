import axios from "axios"

const API = axios.create(process.env.baseURL || 5000)

//Chatrooms CRUD
export const createChatroom = (newChatroom) => API.post('api/chatrooms/', newChatroom)
export const readChatrooms = () => API.get('api/chatrooms/')
export const updateChatroom = (id, updatedChatroom) => API.patch(`api/chatrooms/${id}`, updatedChatroom)
export const deleteChatroom = (id) => API.delete(`api/chatrooms/${id}`)