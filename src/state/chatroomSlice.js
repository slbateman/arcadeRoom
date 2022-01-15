import { createSlice } from '@reduxjs/toolkit';
import { updateChatroom } from '../api/chatroomAPI';
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
            state.chatroom.push(action.payload)
            localStorage.setItem('chatroom', JSON.stringify(state.chatroom))
        },
        editChatroom: (state, action) => {
        },
        addMessages: (state, action) => {
            const index = state.chatroom.findIndex((e) => e._id === action.payload._id)
            state.chatroom[index].messages = action.payload.messages
            updateChatroom(action.payload._id, {messages: action.payload.messages})
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