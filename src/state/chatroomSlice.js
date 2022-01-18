import { createSlice } from '@reduxjs/toolkit';
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
        },
        addMessages: (state, action) => {
            const index = state.chatroom.findIndex((e) => e._id === action.payload._id)
            state.chatroom[index].messages = action.payload.messages
        },

        removeChatroom: (state, action) => {
            state.chatroom.splice(state.chatroom.findIndex((e) => e._id === action.payload, 1));
        }
    }
})

export const { allChatrooms, addChatroom, addMessages, removeChatroom } = chatroomSlice.actions;
export const selectChatroom = (state) => state.chatroom.chatroom;
export default chatroomSlice.reducer;