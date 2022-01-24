

import {configureStore } from '@reduxjs/toolkit';
import usersReducer from '../usersSlice';
import chatroomReducer from '../chatroomSlice';
import pmReducer from '../pmSlice';


 const store = configureStore({
    reducer:{
        pms: pmReducer,
        users: usersReducer,
        chatroom: chatroomReducer,
    }
});

export default store; 