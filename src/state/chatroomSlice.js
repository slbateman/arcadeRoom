import { createSlice } from '@reduxjs/toolkit';
import defaultChatroom from '../components/Chat/content'
let chatroom = []


export const chatroomSlice = createSlice({
    name: 'chatroom',
    initialState: {
        chatroom: chatroom
    },

    reducers: {
        allChatrooms: (state,action) => {
            state.chatroom = action.payload
        },
        addChatroom: (state, action) => {
            console.log(action.payload)

            state.chatroom.push(action.payload)

            localStorage.setItem('chatroom', JSON.stringify(state.chatroom))
        },
        editChatroom: (state, action) => {
            //this only works if you send the entire chatroom data
            state.chatroom.map((data) => (data._id === action.payload._id ? action.payload : data))
        },
        addMessages: (state, action) => {
            const index = state.chatroom.findIndex((e) => e.name === action.payload.name)
            state.chatroom[index].messages.push({user_id: action.payload.user_id, message: action.payload.message})
            
            localStorage.setItem('chatroom', JSON.stringify(state.chatroom))
        },

        removeChatroom: (state, action) => {

            state.chatroom.splice(state.chatroom.findIndex((e) => e._id === action.payload, 1));

            localStorage.setItem('chatroom', JSON.stringify(state.chatroom))
        }
    }
})

export const { allChatrooms, addChatroom, addMessages, removeChatroom } = chatroomSlice.actions;
export const selectChatroom = (state) => state.chatroom.chatroom;
export default chatroomSlice.reducer;