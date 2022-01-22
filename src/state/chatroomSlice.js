import { createSlice } from '@reduxjs/toolkit';
import { updateChatroom } from '../api/chatroomAPI'
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
        },
        editChatroom: (state, action) => {
            const index = state.chatroom.findIndex((e) => e._id === action.payload._id)
            state.chatroom[index].name = action.payload.name
            state.chatroom[index].description = action.payload.description
            state.chatroom[index].color = action.payload.color
            state.chatroom[index].passcode = action.payload.passcode
            updateChatroom(action.payload._id, {name: action.payload.name, description: action.payload.description, color: action.payload.color, passcode: action.payload.passcode})
        },
        addMessages: (state, action) => {
            const index = state.chatroom.findIndex((e) => e._id === action.payload._id)
            state.chatroom[index].messages = action.payload.messages

            updateChatroom(action.payload._id, {messages: action.payload.messages})

        },
        addUserAccess: (state, action) => {
            const index = state.chatroom.findIndex((e) => e._id === action.payload._id)
            state.chatroom[index].access = action.payload.access
            updateChatroom(action.payload._id, {access: action.payload.access})
        },
        removeChatroom: (state, action) => {
            state.chatroom.splice(state.chatroom.findIndex((e) => e._id === action.payload), 1);
        }
    }
})

export const { allChatrooms, addChatroom, addMessages, addUserAccess, editChatroom, removeChatroom } = chatroomSlice.actions;
export const selectChatroom = (state) => state.chatroom.chatroom;
export default chatroomSlice.reducer;