import { createSlice } from '@reduxjs/toolkit';
import defaultChatroom from '../components/Chat/content'
let chatroom = JSON.parse(localStorage.getItem('chatroom'))
if(!chatroom) {
    chatroom = defaultChatroom
    localStorage.setItem("chatroom", JSON.stringify(chatroom))
}

export const chatroomSlice = createSlice({
    name: 'chatroom',
    initialState: {
        chatroom: chatroom
    },

    reducers: {
        addChatroom: (state, action) => {
            console.log(action.payload)

            state.chatroom.push(action.payload)

            localStorage.setItem('chatroom', JSON.stringify(state.chatroom))
        },

        deleteChatroom: (state, action) => {
            state.chatroom.splice(action.payload, 1);
            localStorage.setItem('chatroom', JSON.stringify(state.chatroom))
        }
    }
})

export const { addChatroom, deleteChatroom } = chatroomSlice.actions;
export const selectChatroom = (state) => state.chatroom.chatroom;
export default chatroomSlice.reducer;