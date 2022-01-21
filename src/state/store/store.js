

import {configureStore } from '@reduxjs/toolkit';
import contentReducer from '../contentSlice'; 
import messageReducer from '../messageSlice';
import usersReducer from '../usersSlice';
import chatroomReducer from '../chatroomSlice';
import pmReducer from '../pmSlice';
//import gameReducer from '../gameSlice'; 


 const store = configureStore({
    reducer:{
        content: contentReducer,//about page content 
        messages: messageReducer,//pm messages 
        pms: pmReducer,
        users: usersReducer,
        chatroom: chatroomReducer,
        //game: gameReducer, 
    }
});

export default store; 