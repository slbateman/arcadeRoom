

import {createSlice} from '@reduxjs/toolkit';


let messages =[];
let storedMessages = JSON.parse(localStorage.getItem("storedMessages"));
if (storedMessages) messages = storedMessages; 

export const messageSlice = createSlice ({
    name: 'messages',
    initialState: {
      messages:   messages
    },
    reducers: {
       addmMessages: (state, action) => {
        console.log(action.payload); 
        state.messages = action.payload;
        localStorage.setItem('storedMessages', JSON.stringify(state.messages));
    },
    deleteMessages: (state,action) => {
      state.messages.splice(action.payload, 1)
      localStorage.setItem("storedMessages",JSON.stringify(state.messages))
    }
  }
})

export const {addMessages,deleteMessages} = messageSlice.actions;
export const selectMessages = (state) => state.messages.messages;
export default messageSlice.reducer; 